import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import './checkbox.scss';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ColorCheckboxes() {
  return (
    <div className="container">
        <div className='box-group'>
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check" />
                <label htmlFor="check">Entrada(Pedido de Compra/NF)</label>
            </div>   
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check1" />
                <label htmlFor="check1">Saída(Pedido de Venda)</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check2" />
                <label htmlFor="check2">Pedido</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check3" />
                <label htmlFor="check3">Gerar faturamento</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check4" />
                <label htmlFor="check4">Gerar movimentação de estoque</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check5" />
                <label htmlFor="check5">Operação interestadual</label>
            </div> 
        </div>
        <div className='box-group'>
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check6" />
                <label htmlFor="check6">Incluir IPI no total do item</label>
            </div>   
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check7" />
                <label htmlFor="check7">Incluir ICMS no total do item</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check8" />
                <label htmlFor="check8">Incluir IPI na base do calculo do ICMS</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check9" />
                <label htmlFor="check9">Incluir Frete+Seguro+Outras despesas na base do ICMS</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check10" />
                <label htmlFor="check10">Incluir valor do imposto de Importação (II) no total do item</label>
            </div> 
            <div className="boxItem">
                <Checkbox {...label} defaultChecked id="check11" />
                <label htmlFor="check11">Incluir PIS no total do item</label>
            </div> 
        </div>
    </div>
  );
}