import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import './checkboxInvoice.scss';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div className="container">
        <div className='box-group'>
            <h4>Opções de importação</h4>
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check" />
                <label htmlFor="check">Importação direta (envio do arquivo)</label>
            </div>   
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check1" />
                <label htmlFor="check1">Importar faturamento</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check2" />
                <label htmlFor="check2">Importar código do produto</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check3" />
                <label htmlFor="check3">Importar CFOP no cadastro do produto</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check4" />
                <label htmlFor="check4">Importar no código original</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check5" />
                <label htmlFor="check5">Importar no código do fabricante</label>
            </div> 
        </div>
        <div className='box-group'>
            <h4>Opções de busca</h4>
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check6" />
                <label htmlFor="check6">Pedir confirmação dos produtos</label>
            </div>   
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check7" />
                <label htmlFor="check7">Buscar produtos pelo código de barras</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check8" />
                <label htmlFor="check8">Buscar produtos pelo código original</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check9" />
                <label htmlFor="check9">Buscar produtos pelo código do fabricante</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check10" />
                <label htmlFor="check10">Buscar produto pelo código sequencial</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check11" />
                <label htmlFor="check11">Buscar produto pela descrição</label>
            </div> 
        </div>
    </div>
  );
}