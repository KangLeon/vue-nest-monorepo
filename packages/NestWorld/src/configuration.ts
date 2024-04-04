/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-02-03 01:29:55
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-02 00:05:27
 * @FilePath: /NestWorld/src/configuration.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { readFileSync } from "fs";
import * as yaml from "js-yaml";
import { join } from "path";
import * as _ from "lodash";

const YAML_COMMON_CONFIG_FILENAME = "config.yml";
const filePath = join("config", YAML_COMMON_CONFIG_FILENAME);

console.log("获取的路径是：" + filePath)

const envPath = join(
  "config",
  `config.${process.env.NODE_ENV || "development"}.yml`,
);

const commonConfig = yaml.load(readFileSync(filePath, "utf8"));
const envConfig = yaml.load(readFileSync(envPath, "utf8"));

export default () => {
  return _.merge(commonConfig, envConfig);
};
