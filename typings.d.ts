declare module '*.css';
declare module '*.less';
declare module "*.png";
declare module '*.scss';
declare module '*.json';
declare module '*.md';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}
