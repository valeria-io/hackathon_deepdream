import os

from video_utils import video_to_images, images_to_video

from configs import input_video_frames_path
from configs import input_video_path, output_video_frames_path, output_video_path
from deep_dream_utils import *

if __name__ == "__main__":
    video_to_images(input_video_path)

    session = tf.InteractiveSession(graph=model.graph)

    images = sorted(
        [os.path.join(input_video_frames_path, filename) for filename in os.listdir(input_video_frames_path)])

    for image_path in images:
        filename = os.path.basename(image_path)

        image = load_image(filename=image_path)

        #layer_tensor = model.layer_tensors[6] #for dogs
        layer_tensor = model.layer_tensors[10] #for reptiles

        img_result = recursive_optimize(layer_tensor=layer_tensor, image=image, session=session,
                                        num_iterations=10, step_size=3.0, rescale_factor=0.7,
                                        num_repeats=2, blend=0.2)

        # To save the final Output
        image_save = save_image(img_result, os.path.join(output_video_frames_path, filename))
        print("Image saved to" + os.path.join(output_video_frames_path, filename))

    images_to_video(output_video_frames_path, output_video_path)
