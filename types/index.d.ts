export type ProdiaAiModels = "sdv1_4.ckpt [7460a6fa]" | "anythingv3_0-pruned.ckpt [2700c435]" | "anything-v4.5-pruned.ckpt [65745d25]" | "analog-diffusion-1.0.ckpt [9ca13f02]" | "theallys-mix-ii-churned.safetensors [5d9225a4]" | "elldreths-vivid-mix.safetensors [342d9d26]"

export type ProdiaAiImageRatio = "square" | "landscape" | "portrait";

export type ProdiaAiSamplers = "Euler" | "Euler a" | "Heun" | "DPM++ 2M Karras"

export interface ProdiaAiJobParameters {
    model: ProdiaAiModels,
    prompt: string,
    negative_prompt?: string,
    seed?: number,
    steps?: number,
    /**
     * image aspect ratio 
     * - square
     * - landscape
     * - portrait
     * @defaultValue `square`
     */
    aspect_ratio?: ProdiaAiImageRatio,

    /**
     * samplers
     * - Euler
     * - Euler a
     * - Heun
     * - DPM++ 2M Karras
     */
    sampler?: ProdiaAiSamplers,
    /**
     * upscale
     * - true
     * - false
     * @defaultValue `false`
     */
    upscale?: boolean,
}

// @TODO: return interface/response
export declare const createJob: Promise<any> = (params: ProdiaAiJobParameters) => Promise<any>();