FROM node:22

RUN mkdir /work && chown 1000:1000 /work

WORKDIR /work

RUN git clone https://github.com/jackyzha0/quartz.git

WORKDIR /work/quartz

RUN git checkout v4
RUN npm install
RUN npx quartz update

ENTRYPOINT ["/usr/local/bin/npx"]
CMD ["quartz", "build"]
