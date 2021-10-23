FROM fusuf/whatsasena:latest

RUN git clone https://github.com/kgamdaofficial/Amdibell /root/Amdibell
WORKDIR /root/Amdibell/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
