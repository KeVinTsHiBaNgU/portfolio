"use client";

import Image from "next/image";
import Experience from "./Components/Experience";
import Projet from "./Components/Projet";
import { useState } from "react";
import Competence from "./Components/Competence";
import Formation from "./Components/Formation";
import data_comp from "./Data/data_competences";
import data_form from "./Data/data_formations";
import data_savoir from "./Data/data_savoir";
import data_exp from "./Data/data_experience";
import data_projet from "./Data/data_projet";

export default function Home() {
  /********************* DONNEES  **************************/

  /********************* EXPERIENCES  **************************/
  var experiences = data_exp();

  /********************* PROJETS  **************************/
  var projets = data_projet();

  /** Affichage dynamique des projets **/
  const [ind_projet, set_ind_projet] = useState(0);
  const display_project = (e) => {
    set_ind_projet(e.target.id);
  };

  /********************* COMPETENCES  **************************/

  var competences = data_comp();

  /** Affichage dynamique des compétences **/
  const [ind_tab_comp, set_ind_tab_comp] = useState(0);
  const display_comp = (e) => {
    set_ind_tab_comp(e.target.id);
  };

  /********************* FORMATIONS  **************************/

  var formations = data_form();

  /** Affichage dynamique des formations **/

  const [ind_formation, set_ind_formation] = useState(0);
  const formation_carousel = (e) => {
    var sign = e.target.id;

    if (sign == "previous") {
      if (ind_formation != 0) set_ind_formation(ind_formation - 1);
      else set_ind_formation(formations.length - 1);
    } else {
      if (ind_formation < formations.length - 1)
        set_ind_formation(ind_projet + 1);
      else set_ind_formation(0);
    }
  };

  /********************* SAVOIRS  **************************/

  const savoirs = data_savoir();

  /********************* CONSTANTES DE STYLE  **************************/
  const s_sideBar =
    "h-[100%] w-[17%] fixed bg-gradient-to-b from-blue-600 to-purple-600 flex flex-col border-r-2 border-gray-300 shadow-lg";
  // const s_photo =
  //   "mx-auto h-[8em] w-[8em] mt-10 rounded-full  flex items-center justify-center font-semibold";
  const s_logo = "mx-auto mt-20 scale-[115%]";
  const s_nav =
    "h-[10%] text-sm w-[80%] rounded-lg hover:scale-[105%] mx-auto bg-blue-700 text-white flex items-center justify-center border border-transparent hover:border-white transition duration-300";

  const s_nav_section = "h-[50%] mt-10 space-y-6 flex flex-col items-center";
  const s_main = "flex flex-col h-[400%] w-[83%] ml-[17%]";
  const s_hr = "w-full h-[0.1em] mt-20 bg-black ";
  const s_photo =
    "mx-auto mt-10 h-32 w-32 rounded-full border-4 border-white shadow-md";

  return (
    <main className="h-full bg-inherit flex flex-row">
      {/********************* SIDE BAR **********************/}
      <div className={s_sideBar}>
        <Image
          className={s_logo}
          height={300}
          width={200}
          src="./img/logo.png"
          alt="Logo"
        />

        <Image
          className={s_photo}
          src="./img/profile.png"
          alt="Profile Photo"
          width={128}
          height={128}
        />

        <div className={s_nav_section}>
          <div className={s_nav}>
            <a href="#competences">💼 Compétences</a>
          </div>
          <div className={s_nav}>
            <a href="#experiences">📜 Expériences</a>
          </div>
          <div className={s_nav}>
            <a href="#savoirs">🌟 Savoir Être</a>
          </div>
          <div className={s_nav}>
            <a href="#formations">🎓 Formations</a>
          </div>
          <div className={s_nav}>
            <a href="#projets">🚀 Projets</a>
          </div>
        </div>
      </div>

      {/********************* SECTION PRINCIPALE **********************/}
      <div className={s_main}>
        {/********************* PRESENTATION **********************/}

        <div className="w-full pt-12 px-12">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-serif text-purple-700">
              Kevin TSHIBANGU
            </h1>
            <div className="flex justify-center items-center mt-4">
              <span className="italic font-serif text-lg text-purple-600">
                Data Analyst Junior en quête d'opportunités
              </span>
              <span className="ml-4 text-3xl text-purple-700">&#128202;</span>
            </div>
          </div>

          <div className="text-center text-justify tracking-wide text-base font-serif text-gray-700 mx-auto max-w-3xl mb-8">
            Diplômé d'un Master MIAGE (Méthodes informatiques Appliquées à la
            Gestion des Entreprises), spécialisé en Ingénierie des Données et
            Décision, passionné par la transformation des données brutes en
            informations stratégiques. À la recherche d’une opportunité pour
            optimiser les processus de décision grâce à des analyses de données
            précises et efficaces chez Crédit Agricole Languedoc.
          </div>

          <div className="flex justify-center items-center space-x-6 text-lg text-gray-700 mb-10">
            <div className="flex items-center space-x-2">
              <span>&#128233;</span>
              <span>: kevintshib08@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>&#128241;</span>
              <span>: +33 7 68 11 43 43</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>&#128664;</span>
              <span>: Toute la France</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-10">
            <a
              href="./files/CV_DATA_ANALYST_TSHIBANGU.pdf"
              target="_blank"
              className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Télécharger mon CV
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-tshibangu"
              target="_blank"
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
            >
              <svg
                className="w-6 h-6 mr-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M22.23 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.5c.97 0 1.77-.78 1.77-1.75V1.75C24 .78 23.2 0 22.23 0zm-15 20.452H3.53V9.045H7.23v11.407zm-1.85-12.88h-.032c-1.24 0-2.04-.855-2.04-1.926 0-1.09.82-1.93 2.082-1.93s2.04.84 2.072 1.93c0 1.071-.792 1.926-2.08 1.926zm16.3 12.88h-3.71V14.1c0-1.594-.568-2.684-1.99-2.684-1.084 0-1.733.73-2.018 1.436-.104.252-.13.6-.13.949v6.651h-3.71V9.045h3.71v1.554c.496-.764 1.34-1.853 3.258-1.853 2.36 0 4.125 1.541 4.125 4.85v6.856z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <hr className="mt-12 border-t-2 border-gray-300" />
        {/* <div className={s_hr}></div> */}

        {/********************* COMPETENCES **********************/}

        <div id="competences" className=" w-full h-[15%] relative pl-12 pt-10 ">
          <span className="text-4xl font-serif text-purple-700 mb-6">
            COMPETENCES
          </span>
          <br />
          <a
            href="https://www.cigref.fr/nomenclature-des-profils-metiers-du-si-version-2022#:~:text=Cette%20nouvelle%20version%202022%20est,est%20donc%20une%20version%20compl%C3%A8te."
            target="_blank"
            className="text-blue-500 text-sm italic mb-8 block hover:underline"
          >
            Compétences issues du référentiel présent sur le site du CIGREF
            (version 2022)
          </a>

          <div className="flex flex-row mx-auto space-x-7  mt-6 h-[17%] w-[50%]">
            {competences.map((item, index) => {
              return (
                <div
                  id={index}
                  key={index}
                  onClick={display_comp}
                  className="p-4 bg-white rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer max-w-xs text-center"

                  // className={`p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ${item.color} text-white cursor-pointer`}
                >
                  {item.poste}
                </div>
              );
            })}
          </div>

          <div className="no-scrollbar mt-10 overflow-y-auto h-[60%]">
            {competences[ind_tab_comp].comp.map((item, index) => {
              return <Competence key={index} comp={item}></Competence>;
            })}
          </div>
        </div>

        <hr className="mt-12 border-t-2 border-gray-300" />

        {/* <div className={s_hr}></div> */}

        {/********************* EXPERIENCES **********************/}
        <div id="experiences" className="w-full pt-12 px-12">
          <h2 className="text-4xl font-serif text-purple-700 mb-6">
            Expériences
          </h2>

          <div className="flex flex-col space-y-6 overflow-y-auto h-96 pb-6">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition duration-300"
              >
                <Experience exp={item} />
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-12 border-t-2 border-gray-300" />
        {/* <div className={s_hr}></div> */}

        {/********************* SAVOIR ETRE **********************/}

        <div id="savoirs" className="w-full pt-12 px-12">
          <h2 className="text-4xl font-serif text-purple-700 mb-6">
            Savoir Être
          </h2>

          <a
            href="https://www.francetravail.fr/files/live/sites/PE/files/fichiers-en-telechargement/referentiel_savoir_etre_professionnels56660.pdf"
            target="_blank"
            className="text-blue-500 text-sm italic mb-8 block hover:underline"
          >
            Savoir être issu du référentiel présent sur le site de France Travail
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10 mx-auto justify-items-center">
            {savoirs.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transform hover:scale-105 transition duration-300 max-w-sm"
              >
                <h3 className="text-lg font-semibold text-purple-700 mb-2">
                  {item.nom}
                </h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <hr className="mt-12 border-t-2 border-gray-300" />
        {/* <div className={s_hr}></div> */}

        {/*********************  FORMATIONS **********************/}
        <div id="formations" className="w-full pt-12 px-12">
          <h2 className="text-4xl font-serif text-purple-700 mb-6">
            Formations
          </h2>

          <a
            href="https://www.francecompetences.fr/recherche/rncp/31471/"
            target="_blank"
            className="text-blue-500 text-sm italic mb-8 block hover:underline"
          >
            Liste des acquis des formations selon le site France compétences
          </a>

          <div className="relative flex items-center justify-between mb-10">
            <button
              id="previous"
              onClick={formation_carousel}
              className="text-purple-700 text-3xl hover:scale-110 transform transition duration-300 focus:outline-none"
            >
              &#10216;
            </button>

            <div className="flex-grow mx-4">
              <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transition duration-300">
                <Formation form={formations[ind_formation]} />
              </div>
            </div>

            <button
              id="next"
              onClick={formation_carousel}
              className="text-purple-700 text-3xl hover:scale-110 transform transition duration-300 focus:outline-none"
            >
              &#10217;
            </button>
          </div>
        </div>
        <hr className="mt-12 border-t-2 border-gray-300" />

        {/* <div className={s_hr}></div> */}

        <div id="projets" className="relative w-full h-[14%] pt-10  pl-12 ">
          <h2 className="text-4xl font-serif text-purple-700 mb-6">Projets</h2>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {projets.map((item, index) => (
              <div
                key={index}
                id={index}
                onClick={display_project}
                className="p-4 bg-white rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer max-w-xs text-center"
              >
                {/* <h3 className="text-lg font-semibold text-purple-700"> */}
                {item.titre}
                {/* </h3> */}
              </div>
            ))}
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-500">
            <Projet projet={projets[ind_projet]} />
          </div>

          <hr className="mt-12 border-t-2 border-gray-300" />
        </div>
      </div>
    </main>
  );
}
