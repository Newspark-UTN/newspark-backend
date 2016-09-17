FROM mhart/alpine-node:6.6.0

EXPOSE 8080

COPY ./ /opt/newspark

WORKDIR /opt/newspark

RUN npm install -g pm2 && \
    npm install

CMD ["pm2", "start", "index.js", "--no-daemon"] 