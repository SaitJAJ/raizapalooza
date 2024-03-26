FROM node:20-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
WORKDIR /app
COPY package*.json ./

FROM base as builder
WORKDIR /app
RUN apk add build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
COPY . .
RUN npm ci
RUN npm run build

FROM base as production
WORKDIR /app

ENV NODE_ENV=production
RUN npm install

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

CMD npm start

#FROM base as dev
#ENV NODE_ENV=development
#RUN npm install
#COPY . .
#CMD npm run dev


