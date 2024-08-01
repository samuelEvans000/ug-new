import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import "./Propuesta.css";

const RenderContent3 = () => {
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const renderContent = () => {
    switch (activeButton) {
      case 1:
        return (
          <div className="formbox-text">
            <p>
              Te capacitarás para promocionar e intermediar en la compra, venta
              u otro tipo de explotación económica de inmuebles, con
              conocimientos profesionales de marketing y negociación.
            </p>
            <p>
              Formación de corta duración, concreta y aplicable: que se puede
              complementar luego completando una formación de grado para
              profundizar tu profesionalización. Trayectos de formación
              flexible: podrás tomar tramos independientes, y adaptar la
              duración y dedicación a tu disponibilidad horaria.
            </p>
            <div className="formbox-text-inner">
              <div className="fti1">
                <div className="fti1-text">
                  <div>
                    <img src="/assets/form1.png" />
                  </div>
                  <div>
                    <h5>Títulos Finales:</h5>
                    <ul>
                      <li>
                      Diplomatura Universitaria en Negocios y Marketing Inmobiliario (8 meses)
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="fti1-text">
                  <div>
                    <img src="/assets/form3.png" />
                  </div>
                  <div>
                    <h5>Títulos aprobados por:</h5>
                    <ul>
                      <li>Resolución Ministerio de Educación Nro. 2349/22.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="fti2">
                <Link
                  to="https://drive.google.com/file/d/1_8vqrUPlTm-xtxMcZAnwgyS7t233_rLe/view?usp=drive_link  "
                  target="_blank"
                >
                  <button className="plan">
                    Descargar<br></br>
                    Plan de Estudios
                  </button>
                </Link>
                {/* <button className="plan">Equivalencias</button> */}
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="formbox-text">
            <p>
              Quienes se desempeñen en el ámbito inmobiliario, y aspiren a
              mejorar su formación, adquiriendo nuevas capacidades específicas.
            </p>
            <p>
              Toda persona que desee formarse para desempeñarse en el mercado
              inmobiliario.
            </p>
          </div>
        );
      case 3:
        return (
          <div className="formbox-text">
            <p>El graduado será un profesional competente para:</p>
            <ul>
              <li>
                Desarrollar una sólida formación teórica y práctica para el
                ejercicio eficiente y responsable de la profesión de Corretaje y
                Negocios Inmobiliarios de propiedades. Participación de equipos
                de investigación y desarrollo.
              </li>
              <li>
                Suministrar los conocimientos jurídicos, contables e
                instrumentales que permitan a quienes se dediquen a esta
                actividad, la adquisición de un perfil profesional.
              </li>
              <li>
                Ofrecer una formación básica que prevea las estrategias y las
                motivaciones para el permanente perfeccionamiento y la
                capacitación continua en las diversas áreas de competencia de la
                profesión.
              </li>
              <li>
                Implementar los conocimientos esenciales de las diversas
                especialidades y orientaciones propias de la profesión.
              </li>
            </ul>
          </div>
        );
      default:
        return <div>Content for Button 1</div>;
    }
  };

  const getButtonStyle = (buttonNumber) => {
    return {
      backgroundColor: activeButton === buttonNumber ? "#681c2c" : "#fff",
      color: activeButton === buttonNumber ? "#fff" : "#b0344c",
    };
  };

  return (
    <Element name="c3">
    <div id="c3" className="propForms1">
      <div className="formbox">
        <h2>
          Diplomatura Universitaria en<br></br> Negociación y Marketing
          Inmobiliario
        </h2>

        <div className="formbox-content">
          <div className="formbox-page">
            <div className="formbox-nav">
              <button
                style={getButtonStyle(1)}
                onClick={() => handleButtonClick(1)}
              >
                Presentación
              </button>
              <div className="bline" />
              <button
                style={getButtonStyle(2)}
                onClick={() => handleButtonClick(2)}
              >
                Destinatarios
              </button>
              <div className="bline" />
              <button
                style={getButtonStyle(3)}
                onClick={() => handleButtonClick(3)}
              >
                Alcances y Salida Laboral
              </button>
            </div>
            {renderContent()}
          </div>

          <div className="form">
            <iframe
              width={350}
              height={300}
              style={{border:"none"}}
              src="https://inscripciones.ugd.edu.ar/simplified_contact_cases/new?theme=iucila&account=001Hp00002dZGl0IAG&office=a0ahp00000ah7riial"
            />
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default RenderContent3;
