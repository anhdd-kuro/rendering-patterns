declare type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

declare module "*.gql" {
  const content: any;
  export default content;
}
