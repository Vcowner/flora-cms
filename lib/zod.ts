/*
 * @Author: liaokt
 * @Description: 校验汉化
 * @Date: 2024-09-10 14:53:31
 * @LastEditors: liaokt
 * @LastEditTime: 2024-09-10 14:55:57
 */
import { z } from "zod";
import { zodI18nMap } from "zod-i18n-map";
import i18next from "i18next";
import translation from "zod-i18n-map/locales/zh-CN/zod.json";

i18next.init({
  lng: "es",
  resources: {
    es: { zod: translation },
  },
});

z.setErrorMap(zodI18nMap);

export { z };
