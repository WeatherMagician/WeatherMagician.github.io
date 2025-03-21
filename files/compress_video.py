import cv2
import os

def compress_video_cv2(input_path, output_path, scale=0.5):
    """
    使用 OpenCV 压缩视频，将视频分辨率按 scale 缩小。
    :param input_path: 输入视频路径
    :param output_path: 输出视频路径
    :param scale: 缩放比例（0~1），默认 0.5 表示分辨率减半
    """
    cap = cv2.VideoCapture(input_path)
    if not cap.isOpened():
        print(f"无法打开视频：{input_path}")
        return

    # 获取视频基本属性
    fps = cap.get(cv2.CAP_PROP_FPS)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    

    # 定义视频编码器，使用 mp4v 编码输出为 MP4 格式
    fourcc = cv2.VideoWriter_fourcc(*'H264')
    if (height>500):
        scale = 500 / height
        new_width = int(width * scale)
        new_height = int(height * scale)
    
    
        out = cv2.VideoWriter(output_path, fourcc, fps, (new_width, new_height))
    else:
        out = cv2.VideoWriter(output_path, fourcc, fps, (width, height))
    
    frame_count = 0
    while frame_count<150:
        ret, frame = cap.read()
        if not ret:
            break
        # 调整帧尺寸
        if (height>500):
            frame_resized = cv2.resize(frame, (new_width, new_height))
        else:
            frame_resized = frame
        out.write(frame_resized)
        frame_count += 1

    cap.release()
    out.release()
    print(f"压缩完成：{output_path}，共处理 {frame_count} 帧")

def main():
    # 遍历 video 文件夹及所有子文件夹
    video_dir = "./videos"
    for root, dirs, files in os.walk(video_dir):
        for file in files:
            # 根据文件后缀判断是否为视频文件（可根据需要增加或减少格式）
            if file.lower().endswith(('.mp4', '.mov', '.avi', '.mkv', '.flv')):
                if file=="treehill.mp4" or file=="road2.mp4": 
                    continue
                input_path = os.path.join(root, file)
                base, _ = os.path.splitext(file)
                # 输出文件名添加 _compressed 后缀
                output_file = base + ".mp4"
                output_path = os.path.join("./new/"+root, output_file)
                
                print(f"正在处理：{input_path}")
                compress_video_cv2(input_path, output_path, scale=0.5)

if __name__ == '__main__':
    main()
