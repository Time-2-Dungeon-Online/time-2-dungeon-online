module.exports = async (globalConfig) => {
  await testServer.listen().close();
};
