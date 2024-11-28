-- CreateTable
CREATE TABLE "customer" (
    "customer_id" SERIAL NOT NULL,
    "first_name" VARCHAR(45) NOT NULL,
    "last_name" VARCHAR(45) NOT NULL,
    "email" VARCHAR(50),
    "activebool" BOOLEAN NOT NULL DEFAULT true,
    "create_date" DATE NOT NULL DEFAULT ('now'::text)::date,
    "last_update" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "active" INTEGER,

    CONSTRAINT "customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "film" (
    "film_id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "release_year" INTEGER,
    "rental_duration" SMALLINT NOT NULL DEFAULT 3,
    "rental_rate" DECIMAL(4,2) NOT NULL DEFAULT 4.99,
    "length" SMALLINT,
    "replacement_cost" DECIMAL(5,2) NOT NULL DEFAULT 19.99,
    "last_update" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "special_features" TEXT[],

    CONSTRAINT "film_pkey" PRIMARY KEY ("film_id")
);

-- CreateTable
CREATE TABLE "rental" (
    "rental_id" SERIAL NOT NULL,
    "rental_date" TIMESTAMP(6) NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "film_id" INTEGER NOT NULL,
    "return_date" TIMESTAMP(6),
    "last_update" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rental_pkey" PRIMARY KEY ("rental_id")
);

-- CreateIndex
CREATE INDEX "idx_last_name" ON "customer"("last_name");

-- CreateIndex
CREATE INDEX "idx_title" ON "film"("title");

-- AddForeignKey
ALTER TABLE "rental" ADD CONSTRAINT "rental_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rental" ADD CONSTRAINT "rental_film_id_fkey" FOREIGN KEY ("film_id") REFERENCES "film"("film_id") ON DELETE RESTRICT ON UPDATE CASCADE;
