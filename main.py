import os

from video_utils import video_to_images, images_to_video

from configs import input_video_frames_path
from configs import input_video_path, output_video_frames_path, output_video_path
from deep_dream_utils import *

layer_tensors = [
    [model.layer_tensors[1], 'oil_painting'],
    [model.layer_tensors[2], 'hatched_painting'],
    [model.layer_tensors[3], 'escher_party'],
    [model.layer_tensors[4], 'circle_time'],
    [model.layer_tensors[5], 'eyeball_extravaganza'],
    [model.layer_tensors[6], 'GHOST_DOGS'],
    [model.layer_tensors[7], 'legs_n_faces'],
    [model.layer_tensors[8], 'st_pauls_lizard_people'],
    [model.layer_tensors[7][:, :, :, 0:3], 'space_bubbles'],
    [model.layer_tensors[6][:, :, :, 1:2], 'mad_painting'],
    [model.layer_tensors[5][:, :, :, 1:3], 'dots_and_dashes'],
    [model.layer_tensors[8][:, :, :, 0:1], 'kinda_like_flowers'],
    [model.layer_tensors[8][:, :, :, 6:7], 'shit_shells']
]

if __name__ == "__main__":
    video_to_images(input_video_path)

    session = tf.InteractiveSession(graph=model.graph)

    images = sorted(
        [os.path.join(input_video_frames_path, filename) for filename in os.listdir(input_video_frames_path)])

    for this_layer_tensor in layer_tensors:

        for image_path in images:
            filename = os.path.basename(image_path)

            image = load_image(filename=image_path)

            layer_tensor = this_layer_tensor[0]

            img_result = recursive_optimize(layer_tensor=layer_tensor, image=image, session=session,
                                            num_iterations=10, step_size=3.0, rescale_factor=0.7,
                                            num_repeats=2, blend=0.2)

            # To save the final Output
            image_save = save_image(img_result, os.path.join(output_video_frames_path, filename))
            print("Image saved to " + os.path.join(output_video_frames_path, filename))

        images_to_video(output_video_frames_path, output_video_path, this_layer_tensor[1])
