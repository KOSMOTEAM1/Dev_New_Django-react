# 베이스가 될 이미지
FROM python:3

# 개발자 정보
MAINTAINER "hyoju2259@gmail.com"

# 환경변수
ENV PYTHONUNBUFFERED 1

# 현재 경로(.)에 존재하는 파일들을 이미지 . 경로에 모두 추가 
COPY . .

# 컨테이너 실행 시 노출될 포트
EXPOSE 5000


# 이미지를 만들기 위해 컨테이너 내부에서 실행할 명령어
RUN pip install -r requirements.txt
