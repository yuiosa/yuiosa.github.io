self.__uv$config = {
    prefix: `/scerver/`,
    bare: 'https://hideipips.q5201681683713.workers.dev/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/scerver/server.handler.js',
    client: '/scerver/server.client.js',
    bundle: '/scerver/server.bundle.js',
    config: '/server/server.config.js',
    sw: '/scerver/server.sw.js',
};
