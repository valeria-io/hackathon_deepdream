import os

windows = False

if windows:
    input_video_path = r"C:\dev\data\hackathon_deepdream\input_video"
    input_video_frames_path = r"C:\dev\data\hackathon_deepdream\input_video_frames"
    output_video_frames_path = r"C:\dev\data\hackathon_deepdream\output_video_frames"
    output_video_path = r"C:\dev\data\hackathon_deepdream\output_video"
else:
    input_video_path = r"/Users/tuxiaochi/dev/data/hackathon_deepdream/input_video"
    input_video_frames_path = r"/Users/tuxiaochi/dev/data/hackathon_deepdream/input_video_frames"
    output_video_frames_path = r"/Users/tuxiaochi/dev/data/hackathon_deepdream/output_video_frames"
    output_video_path = r"/Users/tuxiaochi/dev/data/hackathon_deepdream/output_video"
    output_video_frames_zooming_path = r"/Users/tuxiaochi/dev/data/hackathon_deepdream/output_video_frames_zooming"

ext = "jpg"

input_video_path = os.path.join(input_video_path, os.listdir(input_video_path)[0])