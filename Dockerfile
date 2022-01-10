FROM node:lts as frontend

ARG REACT_APP_BACKEND_ENDPOINT=http://localhost:8080
WORKDIR /usr/src/app
COPY ./frontend /usr/src/app

RUN npm install
RUN npm run build

FROM node:lts

WORKDIR /usr/src/app
COPY . /usr/src/app
COPY --from=frontend /usr/src/app/build /usr/src/app/public

RUN npm install

EXPOSE 8080
ENTRYPOINT ["bash", "entrypoint.sh"]