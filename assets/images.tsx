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
  logo: `${IMGS_DIR}/logo.png`,
} as const;

export type ImageKey = keyof typeof IMAGES;

// Export riêng lẻ từng đường dẫn nếu cần sử dụng trực tiếp
// export const heroImage = IMAGES.hero;

export default IMAGES;
