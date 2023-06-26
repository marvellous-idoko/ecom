const amqp = require("amqplib");
const config = {
  url: "amqps://braczsey:P-7s2hdK4zkm2BTNgGXkSZPe3D08whDQ@gerbil.rmq.cloudamqp.com/braczsey",
  exgNme: "storeExch",
};

class Prod {
  chnl;
  async crtChnl() {
    const cont = await amqp.connect(config.url);
    this.chnl = await cont.createChannel();
  }
  async pubMsg(rtingKey, msg) {
    if (!this.chnl) await this.crtChnl();
    await this.chnl.assertExchange(config.exgNme, "direct");
    await this.chnl.publish(
      config.exgNme,
      rtingKey,
      Buffer.from(
        JSON.stringify({
          logType: rtingKey,
          message: msg,
          dateTime:new Date()
        })
      )
    );
        console.log(`the messagr sndh ${msg}`)
  }
}
module.exports = Prod

