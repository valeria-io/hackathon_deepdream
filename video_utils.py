import datetime
import os

import cv2

from configs import input_video_frames_path, ext


def video_to_images(input_video_path):
    vidcap = cv2.VideoCapture(input_video_path)
    success, image = vidcap.read()
    count = 0
    while success:
        cv2.imwrite(os.path.join(input_video_frames_path, "frame{}.jpg".format(str(count).zfill(3))),
                    image)  # save frame as JPEG file
        success, image = vidcap.read()
        print('Read a new frame: ', success)
        count += 1


def images_to_video(output_video_frames_path, output_video_path):
    filename = datetime.datetime.now().strftime("%Y_%m_%d__%H_%M_DeepDream_video.mp4")

    output = os.path.join(output_video_path, filename)

    images = []
    for f in os.listdir(output_video_frames_path):
        if f.endswith(ext):
            images.append(f)

    # Determine the width and height from the first image
    image_path = os.path.join(output_video_frames_path, images[0])
    frame = cv2.imread(image_path)
    cv2.imshow('video', frame)
    height, width, channels = frame.shape

    # Define the codec and create VideoWriter object
    fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # Be sure to use lower case
    out = cv2.VideoWriter(output, fourcc, 20.0, (width, height))

    for image in sorted(images):
        image_path = os.path.join(output_video_frames_path, image)
        frame = cv2.imread(image_path)

        out.write(frame)  # Write out frame to video

        cv2.imshow('video', frame)
        if (cv2.waitKey(1) & 0xFF) == ord('q'):  # Hit `q` to exit
            break

    # Release everything if job is finished
    out.release()
    cv2.destroyAllWindows()
