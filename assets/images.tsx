/**
 * File tổng hợp và export tất cả đường dẫn ảnh trong thư mục public/assets/imgs
 * Khi muốn thêm ảnh mới, bạn hãy chép ảnh vào public/assets/imgs/ và khai báo export thêm ở đây.
 */

// Thư mục gốc chứa ảnh trong public
export const IMGS_DIR = "/assets/imgs";

// Danh sách các hình ảnh trong dự án
export const IMAGES = {
  // Ví dụ các đường dẫn ảnh mẫu:
  avatar: `${IMGS_DIR}/avatar.png`,
  imgNotFound: `${IMGS_DIR}/imgNotFound.png`,
  zauiLogo: `${IMGS_DIR}/zaui_logo.png`,
  deepseek: `${IMGS_DIR}/deepseek.png`,
  toeic: `${IMGS_DIR}/certificate/toeic.png`,
  pm_cert: `${IMGS_DIR}/certificate/PM_cert.png`,
  bwa2026: `${IMGS_DIR}/certificate/bwa2026.png`,
  greenvoices: `${IMGS_DIR}/project/greenvoices.png`,
  greenvoices_zmp: `${IMGS_DIR}/project/greenvoices_zmp.png`,
  orion: `${IMGS_DIR}/project/orion.png`,
  rtechno: `${IMGS_DIR}/project/rtechno.png`,
  ecom: `${IMGS_DIR}/project/ecom.png`,
  battrach: `${IMGS_DIR}/project/battrach.png`,
  ert: `${IMGS_DIR}/project/ert.png`,
  hrnavi: `${IMGS_DIR}/project/hrnavi.png`,
  sensors: `${IMGS_DIR}/project/sensors.png`,
  thanglongjsc: `${IMGS_DIR}/project/thanglongjsc.png`,
  viarocoffee: `${IMGS_DIR}/project/viarocoffee.png`,
  loading: `${IMGS_DIR}/loading.gif`,
  pokemon: `${IMGS_DIR}/project/pokemon.png`,
  miniPanel: `${IMGS_DIR}/project/miniPanel.png`,
  dopfood: `${IMGS_DIR}/project/dopfood.png`,
  bgHero: `${IMGS_DIR}/bgHero.png`,

} as const;

export type ImageKey = keyof typeof IMAGES;

// Export riêng lẻ từng đường dẫn nếu cần sử dụng trực tiếp
// export const heroImage = IMAGES.hero;

export default IMAGES;
