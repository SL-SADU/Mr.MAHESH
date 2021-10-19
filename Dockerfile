FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Kgamdaofficial/Amdibell /root/Amdibell
WORKDIR /root/Amdibell/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
