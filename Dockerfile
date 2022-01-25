FROM fusuf/whatsasena:latest

RUN git clone https://github.com/SL-SADU/Mr.MAHESH /root/Mr.MAHESH
WORKDIR /root/Mr.MAHESH/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]

