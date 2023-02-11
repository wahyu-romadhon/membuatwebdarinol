/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  dataNavbarHeader,
  productPalingLaris,
  dataCarousel,
} from "./constants";
import "./TokopediaDashboard.css";
import Carousel from "react-material-ui-carousel";
import * as S from "./Styled"; //biar pendek saya rename "S"
import { useState } from "react";
import moment from "moment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function TokopediaDashboard() {
  const dataCSSDariBackend = {
    color: "purple",
  };

  const momentt = moment().format("MMM Do YYYY, h:mm");
  const [open, setOpen] = useState(false);

  const showGarisBulat = (props) => {
    let creategaris = [];
    let posisi = props === "atas" ? "bawah" : "atas";

    for (let index = 0; index < 10; index++) {
      creategaris.push(
        <>
          <S.SetengahBulat posisi={posisi}></S.SetengahBulat>
          <S.Garis posisi={posisi}></S.Garis>
        </>
      );
    }

    return (
      <S.WrapContext>
        <S.Garis posisi={posisi}></S.Garis>
        {creategaris}
      </S.WrapContext>
    );
  };

  return (
    <>
      <div className="header">
        <div className="header-navbar">
          <PhoneIphoneIcon fontSize="small" />
          <a href="https://www.tokopedia.com/mobile-apps/">
            Download Tokopedia App
          </a>
        </div>
        <div className="header-navbar">
          {dataNavbarHeader.map((item, index) => {
            return (
              <p key={index} className="item-navbar">
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="sub-header">
        <img
          className="img-logo"
          width={145}
          height={32}
          alt="tokopedia"
          src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
        />
        <div className="sub-header-search">
          <p className="sub-header-text">kategori</p>
          <input placeholder="Cari di Tokopedia" className="sub-header-input" />
          <SearchIcon className="search-icon" />
        </div>
        <div className="sub-header-btn">
          {/* //kita akan coba rombak css ini dengan styled component */}
          <S.Btn adaDataDariBE={dataCSSDariBackend}>Masuk</S.Btn>
          <S.Btn isDaftar>Daftar</S.Btn>
        </div>
      </div>
      <div className="sub-header-product">
        <div className="product-terlaris">
          {productPalingLaris.map((item, index) => {
            return (
              <p key={index} className="item-navbar">
                {item}
              </p>
            );
          })}
        </div>
        <div className="location">
          <LocationOnIcon fontSize="small" />
          <p className="text-location">Dikirim ke</p>
        </div>
        <select className="select-location">
          <option>Jakarta Pusat</option>
          <option>Jakarta Selatan</option>
          <option>Jakarta Barat</option>
        </select>
      </div>
      {/* <div className="wrap-carousel">
        <Carousel
          autoPlay
          indicators
          navButtonsAlwaysVisible
          interval={3000} //interval auto pindah
          animation="slide"
          duration={2000} //perpindahan animasi
          indicatorContainerProps={{
            style: {
              textAlign: "left",
            },
          }}
          indicatorIconButtonProps={{
            style: {
              top: -50,
              zIndex: 1,
              left: 20,
            },
          }}
        >
          {dataCarousel.map((item, index) => {
            return <img src={item.image} alt={item.name} key={index} />;
          })}
        </Carousel>
      </div> */}

      {/* disini kita akan membuat struk keren apk dana */}
      {/* langsung kita bikin styled component nya saja */}
      {/* kita akan bikin di tengah2 */}
      {/* kita buat border dana nya */}
      {/* kita buat bungkus tiap baris konten nya */}
      {/* kita mainkan props tiap beda konten nya */}
      <S.WrapMainDana>
        <S.BorderDana>
          {showGarisBulat("bawah")}
          <S.WrapContext icon>
            <S.IconDana src="dana.png" />
          </S.WrapContext>
          <S.WrapContext text underline>
            <S.TextDana>{momentt}</S.TextDana>
            <S.TextDana>Dana ID: 0812******14</S.TextDana>
          </S.WrapContext>
          <S.WrapContext leftText>
            <CheckCircleIcon fontSize="small" sx={{ color: "#90EE90" }} />
            <S.TextDana little>Data Transaksi Berhasil!</S.TextDana>
          </S.WrapContext>
          <S.WrapContext>
            <S.TextDana leftText>Isi Saldo</S.TextDana>
          </S.WrapContext>
          <S.WrapContext silverBackground>
            <S.TextDana>Isi Saldo</S.TextDana>
          </S.WrapContext>
          <S.WrapContext blueBackground>
            <S.TextDana>Total Biaya</S.TextDana>
            <S.TextDana>Rp1.000.000</S.TextDana>
          </S.WrapContext>
          <S.WrapContext text underline>
            <S.TextDana>Metode Pembayaran</S.TextDana>
            <S.TextDana>Transfer Bank (BRI)</S.TextDana>
          </S.WrapContext>
          <S.WrapContext text>
            <S.TextDana>Detail Transaksi</S.TextDana>
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <KeyboardArrowDownIcon
                  fontSize="small"
                  sx={{ cursor: "pointer" }}
                />
              ) : (
                <KeyboardArrowUpIcon
                  fontSize="small"
                  sx={{ cursor: "pointer" }}
                />
              )}
            </div>
          </S.WrapContext>
          {open && (
            <>
              <S.WrapContext text>
                <S.TextDana>ID Transaksi</S.TextDana>
                <S.TextDana>2022131231771779221</S.TextDana>
              </S.WrapContext>
              <S.WrapContext text>
                <S.TextDana>ID Pesanan Merchant</S.TextDana>
                <S.TextDana>...397612</S.TextDana>
              </S.WrapContext>
            </>
          )}
          {showGarisBulat("atas")}
        </S.BorderDana>
      </S.WrapMainDana>
    </>
  );
}
