import { RESPONSE_HANDLER } from "../src/v1/interface/interface";

export async function responseHandler(params: RESPONSE_HANDLER): Promise<void>{
    let { req, resp, data, msg, status_code, success } = params;
    resp.status(status_code ?? 200).json({
        success: success ?? true,
        data,
        msg: msg ?? '',
    })
    return;
}