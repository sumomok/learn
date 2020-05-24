export interface Article{
    ArticleData:ArticleData[]
}
export interface ArticleType {
    title: string[],
    data: ArticleData[]
}
export interface ArticleData{
    title: string,
    content: string,
    type: string,
    view: number,
    like: number,
    reply:number,
}