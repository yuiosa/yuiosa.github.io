self.__uv$config = {
    prefix: `/server/`,
    bare: 'https://hideois.952768.xyz/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/server/aserver.handler.js',
    client: '/server/aserver.client.js',
    bundle: '/server/aserver.bundle.js',
    config: '/server/aserver.config.js',
    sw: '/server/aserver.sw.js',
};
