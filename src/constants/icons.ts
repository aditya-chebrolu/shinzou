import NextIcon from "@assets/tech/nextjs2.svg";
import NestIcon from "@assets/tech/nestjs.svg";
import JSIcon from "@assets/tech/js.svg";
import JavaIcon from "@assets/tech/java.svg";
import TSIcon from "@assets/tech/typescript.svg";
import ReactIcon from "@assets/tech/reactjs.svg";
import HTMLIcon from "@assets/tech/html5.svg";
import CSSIcon from "@assets/tech/css3.svg";
import NodeIcon from "@assets/tech/nodejs.svg";
import TailwindIcon from "@assets/tech/tailwindcss.svg";
import MongoIcon from "@assets/tech/mongo.svg";
import Ec2Icon from "@assets/tech/ec2.svg";
import SwiftIcon from "@assets/tech/swift.svg";
import ElkIcon from "@assets/tech/elastic.svg";
import RedisIcon from "@assets/tech/redis.svg";
import RQIcon from "@assets/tech/reactquery.svg";
import DockerIcon from "@assets/tech/docker.svg";
import KubernetesIcon from "@assets/tech/kubernetes.svg";
import SpringIcon from "@assets/tech/spring.svg";
import BashIcon from "@assets/tech/bash.svg";
import WebpackIcon from "@assets/tech/webpack.svg";
import AzureIcon from "@assets/tech/azure.svg";

export const icons = {
  javascript: { Icon: JSIcon, text: "JavaScript", slug: "javascript" },
  ts: { Icon: TSIcon, text: "TypeScript", slug: "typescript" },
  java: { Icon: JavaIcon, text: "Java", slug: "java" },
  swift: { Icon: SwiftIcon, text: "Swift", slug: "swift" },
  html: { Icon: HTMLIcon, text: "HTML", slug: "html" },
  css: { Icon: CSSIcon, text: "CSS", slug: "css" },
  tailwind: { Icon: TailwindIcon, text: "Tailwind CSS", slug: "tailwind" },
  react: { Icon: ReactIcon, text: "React", slug: "react" },
  next: { Icon: NextIcon, text: "Next JS", slug: "next" },
  nest: { Icon: NestIcon, text: "Nest", slug: "nest" },
  node: { Icon: NodeIcon, text: "Node.js", slug: "node" },
  mongo: { Icon: MongoIcon, text: "MongoDB", slug: "mongo" },
  ec2: { Icon: Ec2Icon, text: "Amazon EC2", slug: "ec2" },
  bash: { Icon: BashIcon, text: "React", slug: "bash" },
  redis: { Icon: RedisIcon, text: "React", slug: "redis" },
  elk: { Icon: ElkIcon, text: "ELK", slug: "elk" },
  webpack: { Icon: WebpackIcon, text: "Webpack", slug: "webpack" },
  azure: { Icon: AzureIcon, text: "Azure", slug: "azure" },
  springBoot: { Icon: SpringIcon, text: "Spring Boot", slug: "springBoot" },
  reactQuery: { Icon: RQIcon, text: "Reqct Query", slug: "reactQuery" },
  docker: { Icon: DockerIcon, text: "Docker", slug: "docker" },
  kubernetes: { Icon: KubernetesIcon, text: "Kubernetes", slug: "kubernetes" },
};

export type SkillsType = keyof typeof icons;
