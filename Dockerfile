FROM ubuntu:latest
RUN mkdir /app
WORKDIR /app
COPY . .
RUN apt-get update
RUN echo "print('hello world')" > hello.py
CMD python hello.py