-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307:3307
-- Generation Time: Aug 10, 2025 at 08:55 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `customer_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `category_description` varchar(255) NOT NULL,
  `category_image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category_name`, `category_description`, `category_image`, `created_at`, `updated_at`) VALUES
(1, 'Headphones', 'good Headphones', 'category_1.jpg', '2025-07-29 13:42:41', '2025-08-01 04:32:50'),
(3, 'Smartphones', 'best smartphones', 'category_2.jpg', '2025-07-29 13:46:09', '2025-08-01 04:38:04'),
(5, 'Laptops', 'Good Laptops', 'category_3.jpg', '2025-08-01 04:39:19', '2025-08-01 04:39:19'),
(6, 'Smart watches', 'good Smart watches', 'category_4.jpg', '2025-08-01 04:41:12', '2025-08-01 04:41:12');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(4, '2025_07_29_172807_create_table_category', 1),
(6, '0001_01_01_000000_create_users_table', 2),
(7, '0001_01_01_000001_create_cache_table', 2),
(8, '0001_01_01_000002_create_jobs_table', 2),
(9, '2025_07_29_175656_create_category_table', 2),
(10, '2025_07_30_093417_create_product_table', 3),
(12, '2025_08_01_191855_modify_users_table', 4),
(13, '2025_08_01_191941_modify_users_table', 4),
(14, '2025_08_03_173825_create_cart_table', 4);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` int(11) NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `product_description` text NOT NULL,
  `product_image` varchar(255) NOT NULL,
  `product_stock` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `product_name`, `product_price`, `category_id`, `product_description`, `product_image`, `product_stock`, `created_at`, `updated_at`) VALUES
(3, 'Samsung Galaxy A05s (6GB-128GB) Dual Sim With Official Warranty', 35199, 3, 'The Samsung Galaxy A05s features a 6.7-inch Full HD+ PLS LCD display with a 90Hz refresh rate and a resolution of 1080 × 2400 pixels. It is powered by the Qualcomm Snapdragon 680 (6nm) processor with an octa-core CPU (4×2.4 GHz + 4×1.9 GHz) and Adreno 610 GPU. The phone comes with 6GB of RAM and 128GB of internal storage, which is expandable via a dedicated microSD card slot (up to 1TB). It runs on Android 13 with Samsung\'s One UI Core.\r\n\r\nFor photography, the A05s is equipped with a triple rear camera setup: a 50MP main sensor, a 2MP macro lens, and a 2MP depth sensor, along with an LED flash. The front camera is 13MP. Both front and rear cameras support 1080p video recording at 30fps. The phone packs a 5,000mAh battery with support for 25W fast charging via a USB Type-C 2.0 port.', 'smartphone_!.jpg', '35', '2025-07-31 12:50:52', '2025-07-31 13:18:08'),
(4, 'Infinix Hot 50 Pro (8GB,128GB) Dual Sim With Official Warranty', 40699, 3, 'The Infinix Hot 50 Pro features a 6.78-inch FHD+ AMOLED display with a 120Hz refresh rate, peak brightness of 1800 nits, and Gorilla Glass protection. It runs on Android 14 with XOS 14.5 and is powered by the MediaTek Helio G100 (6nm) processor, coupled with an octa-core CPU (2x2.2GHz + 6x2.0GHz) and Mali-G57 MC2 GPU. The device includes 8GB RAM and 128GB internal storage, expandable via a microSD card (up to 2TB).\r\n\r\nIt offers a triple rear camera setup with a 50MP main lens, a 2MP depth sensor, and an additional auxiliary sensor, supporting 1440p and 1080p video recording. The front camera is 8MP with LED flash and 1080p video support. The phone packs a 5000mAh battery with 33W fast charging, reverse charging, and bypass charging features.', 'smartphone_2.jpg', '12', '2025-07-31 13:24:46', '2025-07-31 13:24:46'),
(6, 'Xiaomi Redmi Note 14 (8GB,256GB) Dual Sim With Official Warranty', 53749, 3, 'The Redmi Note 14 runs Android 14 with HyperOS, powered by a MediaTek Helio G99 Ultra (6 nm) chipset—an octa-core configuration with two Cortex‑A76 cores at 2.2 GHz and six Cortex‑A55 at 2.0 GHz, paired with a Mali‑G57 MC2 GPU \r\nWikipedia\r\n+15\r\nMobileDokan\r\n+15\r\nReddit\r\n+15\r\n. It comes equipped with 8 GB LPDDR4X RAM and 256 GB UFS 2.2 internal storage, expandable via a hybrid microSD slot (up to 1 TB) \r\nWikipedia\r\n+1\r\nXiaomi\r\n+1\r\n.\r\n\r\nThe device sports a 6.67‑inch AMOLED display with Full HD+ resolution (2400 × 1080, ~395 ppi), a up to 120 Hz refresh rate, and peak brightness of 1800 nits; the screen is protected by Corning Gorilla Glass 5 and supports an Always‑On Display feature \r\nMega.pk\r\n+13\r\nXiaomi\r\n+13\r\nWhatMobile\r\n+13\r\n.\r\n\r\nPhotography is handled via a triple rear camera system: a 108 MP primary sensor (f/1.7, PDAF, OIS), a 2 MP depth sensor, and a 2 MP macro sensor, all backed by LED flash, HDR, and panorama modes; rear video recording supports 1080p at 30/60 fps \r\nCinco Días\r\n+15\r\nWhatMobile\r\n+15\r\nTechJuice\r\n+15\r\n. On the front is a 20 MP selfie camera (f/2.2) with 1080p video support at 30 fps \r\nMobileDokan\r\n+6\r\nMobileDokan\r\n+6\r\nSpecsGuru\r\n+6\r\n.\r\n\r\nPowering the phone is a 5,500 mAh non‑removable battery, with 33 W fast charging capable of reaching roughly 55% in 44 minutes \r\nWhat Mobile\r\n+3\r\nSpecsGuru\r\n+3\r\nTechJuice\r\n+3\r\n.', 'smartphone_4.jpg', '18', '2025-07-31 13:30:33', '2025-07-31 13:30:33'),
(7, 'Realme C75 (8GB,256GB) Dual Sim With Official Warranty', 46299, 3, 'The Realme C75 packs a 6.72‑inch FHD+ IPS LCD display with a 90 Hz refresh rate, offering up to 580 nits typical brightness and 690 nits in HBM, secured by ArmorShell tempered glass. It is powered by the MediaTek Helio G92 Max chipset (6nm), featuring an octa‑core CPU paired with a Mali‑G57 MC2 GPU, and includes 8 GB LPDDR4X RAM plus 256 GB internal storage, expandable via a dedicated microSDXC slot (up to 2 TB) \r\nWikipedia\r\n+15\r\nRealme\r\n+15\r\nReddit\r\n+15\r\nMobileDokan\r\n+5\r\nWhatMobile\r\n+5\r\nGizmochina\r\n+5\r\n.\r\n\r\nPhotography consists of a dual rear camera setup: a 50 MP main sensor (f/1.8, PDAF, AI-enhanced) plus an auxiliary lens, and an 8 MP front camera (f/2.0). Video support includes 1080p@30fps on both front and rear, along with 720p slow‑motion recording at 120 fps \r\nWhatMobile\r\n.\r\n\r\nFuelled by a massive 6,000 mAh battery, the device supports 45 W fast wired charging, reverse wired charging, and bypass charging, allowing fast top‑ups and even power sharing \r\nRealme\r\nWhatMobile\r\nGizmochina\r\n.\r\n\r\nBuilt to last, the C75 carries IP66/IP68/IP69 dust and water resistance, MIL‑STD‑810H drop certification, and a reinforced ArmorShell glass construction for extra durability \r\ndevicearena.info\r\n+15\r\ncincodias.elpais.com\r\n+15\r\nMobileDokan\r\n+15\r\n.\r\n\r\nAdditional features include Dual Nano‑SIM (4G LTE) standby, Realme UI 5.0 on Android 14, Wi‑Fi 802.11 a/b/g/n/ac, Bluetooth 5.0, USB‑C 2.0 with OTG, FM radio, and PT‑enabled sensors like side‑mounted fingerprint, gyro, proximity, accelerometer, compass, NFC not supported, and a 3.5 mm headphone jack included \r\nReddit\r\n+9\r\nRealme\r\n+9\r\nWhatMobile\r\n+9\r\n.\r\n\r\nThe phone measures approximately 165.7 × 76.2 × 8.0 mm, weighs 196 g, and runs Android 14 with Realme UI 5.0, with Dynamic RAM expansion of up to 8 GB + 16 GB virtual RAM support \r\nGSMArena\r\n+3\r\nRealme\r\n+3\r\nGizmochina\r\n+3\r\n.', 'smartphone_5.jpg', '27', '2025-07-31 13:32:39', '2025-07-31 13:32:39'),
(8, 'Razer Headphones & EarBuds Wireless Headphones BlackShark V2 Pro (2023) With Official Warranty', 76999, 1, 'The BlackShark V2 Pro (2023) is a dual‑mode wireless gaming headset offering both Razer HyperSpeed 2.4 GHz low‑latency wireless and Bluetooth 5.2 connectivity (smart switchable via a button) \r\nWindows Central\r\n+15\r\nEezepc\r\n+15\r\nRazer Support\r\n+15\r\n. It features 50 mm TriForce Titanium drivers tuned separately for highs, mids, and lows, with a frequency response of 12 Hz–28 kHz, impedance of 32 Ω, and sensitivity ~100 dBSPL/mW at 1 kHz \r\nReddit\r\n+8\r\nEezepc\r\n+8\r\nGTStore\r\n+8\r\n. The detachable HyperClear Super Wideband microphone offers a unidirectional pick-up pattern, frequency response 100 Hz–10 kHz, and -42 ± 3 dBV/Pa sensitivity \r\nTechRadar\r\n+9\r\nEezepc\r\n+9\r\nRazer Support\r\n+9\r\n. Comfort is ensured by advanced passive noise isolation, closed earcups with breathable pressure-relieving memory foam (FlowKnit) ear cushions, and a total weight of approximately 320 g \r\nWindows Central\r\n+13\r\nGTStore\r\n+13\r\nEezepc\r\n+13\r\n.\r\n\r\nThe headset supports THX Spatial Audio on Windows (virtual surround encoding), with on-headset audio profile switching for FPS gaming presets pre‑tuned by esports pros \r\nLifewire\r\n+5\r\nGTStore\r\n+5\r\nEezepc\r\n+5\r\n. Controls include on-earcup volume up/down, mic mute toggle, and a SmartSwitch button for toggling between wireless sources and sound profiles \r\nWise-Tech\r\n+5\r\nEezepc\r\n+5\r\nRazer Support\r\n+5\r\n. Powered by USB‑C charging, it delivers up to 70 hours of battery life on a single charge \r\nWise-Tech\r\n+3\r\nLifewire\r\n+3\r\nWindows Central\r\n+3\r\n. The headset body has no lighting, and is compatible with PC, Mac, PlayStation (via 2.4 GHz dongle), Nintendo Switch, and mobile devices (via Bluetooth)', 'headphone_2.jpg', '42', '2025-07-31 13:39:58', '2025-07-31 13:39:58'),
(9, 'Bose QuietComfort Headphones', 90999, 1, 'The Bose QuietComfort Headphones feature custom-tuned 40mm drivers delivering high-fidelity audio with adjustable EQ, including Bass, Mid, and Treble controls via the Bose Music app. They offer world-class noise cancellation with two modes: Quiet Mode for full noise blocking and Aware Mode for environmental awareness. The headphones support Bluetooth 5.1 with a wireless range of up to 9 meters (30 feet) and also include a 3.5mm wired audio option.\r\n\r\nBattery life is rated at up to 24 hours on a full charge, with 15 minutes of fast charging providing up to 2.5 hours of playback via USB-C. The build features plush ear cushions, an adjustable padded headband, and a fold-flat, lightweight design. They include built-in voice assistant support, multi-point Bluetooth connectivity, and on-ear touch controls for playback, calls, and ANC adjustment. The headphones weigh approximately 240 grams and come with a carrying case, audio cable, and charging cable.', 'headphone_3.jpg', '50', '2025-07-31 13:41:12', '2025-07-31 13:41:12'),
(10, 'Anker Soundcore Life Q20i Headphones', 13099, 1, 'The Soundcore Life Q20i are over‑ear wireless headphones featuring hybrid active noise cancellation (ANC) with two internal and two external microphones, capable of reducing up to ~90% of ambient low-/mid‑frequency noise \r\nNew York Post\r\n+9\r\nB&H Photo Video\r\n+9\r\nGemline\r\n+9\r\n. They house 40 mm dynamic drivers with BassUp technology and support Hi‑Res audio over the 3.5mm AUX connection, plus app-based customizable EQ with 22 presets \r\nFullSpecs\r\n+5\r\nsoundcore\r\n+5\r\nB&H Photo Video\r\n+5\r\n. Connectivity is via Bluetooth 5.0 (supporting dual-device multipoint pairing), alongside a detachable 3.5 mm wired connection and USB‑C charging \r\nB&H Photo Video\r\n+1\r\nAbt.com\r\n+1\r\n.\r\n\r\nBattery life reaches up to 40 hours with ANC enabled, and up to 60 hours in standard mode. A 5-minute quick charge delivers around 4 hours of playback, while a full charge takes approximately 90 minutes \r\nAmazon\r\n+7\r\nB&H Photo Video\r\n+7\r\nAbt.com\r\n+7\r\n. The headphones feature a single built‑in microphone for voice calls (plus additional mics dedicated to ANC) and onboard controls for volume and call/music management \r\nsoundcore\r\n.\r\n\r\nPhysically, they weigh about 258 grams, use memory foam ear cushions wrapped in vegan leather for all-day comfort, and offer a foldable design for portability \r\nFullSpecs\r\nAbt.com\r\n. The headphone fit is closed-back and over-ear. Impedance is around 16 Ω, and frequency response spans 20 Hz–40 kHz when using AUX, and about 20 Hz–20 kHz via Bluetooth \r\nFullSpecs\r\nAbt.com\r\n.', 'category_4.jpg', '41', '2025-07-31 13:44:21', '2025-08-06 03:41:00');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('ueUXMXs6y5PXZ5KJ4o669mHpbyWH3tX0yTKSj3rc', 3, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 'YTo4OntzOjY6Il90b2tlbiI7czo0MDoiUlVCdmFSWkJNcTZwYUlGYjFGM3lhakhFeDREVDd1b1ZSeERIaE8xeCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjM7czoyOiJpZCI7aTozO3M6NDoibmFtZSI7czoxMzoiTXVoYW1tYWQgc2FhZCI7czo1OiJlbWFpbCI7czoyMDoibXMyMzQ1ODg4MUBnbWFpbC5jb20iO3M6NToicGhvbmUiO3M6MTE6IjAzMTUyNDU4ODgxIjt9', 1754735154),
('z6TWqMlzztJUjYwYnQrB2DjRQqMfB66gvnK8wQi2', 3, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36', 'YTo3OntzOjY6Il90b2tlbiI7czo0MDoiN2FxYmw2MzZKNVdnNkp3OEJTV0dpWUJsNVUxRWJseFdic0ppTWpOMCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MztzOjI6ImlkIjtpOjM7czo0OiJuYW1lIjtzOjEzOiJNdWhhbW1hZCBzYWFkIjtzOjU6ImVtYWlsIjtzOjIwOiJtczIzNDU4ODgxQGdtYWlsLmNvbSI7czo1OiJwaG9uZSI7czoxMToiMDMxNTI0NTg4ODEiO30=', 1754469847);

-- --------------------------------------------------------

--
-- Table structure for table `table_category`
--

CREATE TABLE `table_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `catgeory_description` varchar(255) NOT NULL,
  `catgeory_image` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `role` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `role`, `name`, `email`, `phone`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'Muhammad saad', 'ms22458881@gmail.com', '0', NULL, '$2y$12$pCa.wdTbVZVHVdGgmr96P.X3X.QkM9Sb8GjVYk.CiV4LlQOpWK1.q', NULL, '2025-07-29 13:42:21', '2025-07-29 13:42:21'),
(3, 'customer', 'Muhammad saad', 'ms23458881@gmail.com', '03152458881', NULL, '$2y$12$lQFjCX7YGWoLP4OWKvo8TOqgg/jMLqILKmpM6rWe8vCg/89V4oLAu', NULL, '2025-08-02 05:25:11', '2025-08-02 05:25:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_category_id_foreign` (`category_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `table_category`
--
ALTER TABLE `table_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `table_category`
--
ALTER TABLE `table_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
