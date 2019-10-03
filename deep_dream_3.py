import cv2
import os

# dream_name = '/content/gdrive/My Drive/deep_dreaming_start/dream/img_0.jpg'

dream_name = 'starry_night'
dream_path = '/content/drive/My Drive/deepdream_start/dream/{}'.format(dream_name)

# windows:
#fourcc = cv2.VideoWriter_fourcc(*'XVID')
fourcc = cv2.VideoWriter_fourcc(*'mp4v')
# Linux:
#fourcc = cv2.VideoWriter_fourcc('M','J','P','G')

out = cv2.VideoWriter('/content/drive/My Drive/deepdream_start/dream/carslow.mp4'.format(dream_name),fourcc, 3.0, (800,450))

i = 2
for i in range(2,53):
    if os.path.isfile('/content/drive/My Drive/deepdream_start/dream/{}/img_{}.jpg'.format(dream_name,i+1)):
        pass
    else:
        dream_length = i
        break

for i in range(55):
    img_path = os.path.join(dream_path,'img_{}.jpg'.format(i))
    print(img_path)
    frame = cv2.imread(img_path)
    out.write(frame)

out.release()

print('finished')
