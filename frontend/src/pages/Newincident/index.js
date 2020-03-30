import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoimg from '../../assets/logo.svg';

export default function Newincident() {
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoimg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar ao início
                    </Link>
                </section>

                <form>
                    <input placeholder="Título do caso"/>
                    <textarea type="email" placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}