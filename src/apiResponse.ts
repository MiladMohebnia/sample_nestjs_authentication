export class APIResponse {
  static success(extraData: object = {}) {
    return {
      status: 'ok',
      ...extraData,
    };
  }

  static failed(extraData: object = {}) {
    return {
      status: 'failed',
      ...extraData,
    };
  }
}
