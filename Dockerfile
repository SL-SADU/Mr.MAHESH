FROM fusuf/whatsasena:latest

RUN git clone https://github.com/kgadmaofficial/Amdibell /root/Amdibell
WORKDIR /root/Amdibell/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
