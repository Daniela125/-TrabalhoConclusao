import { describe } from 'mocha';
import { ServicoDePagamento } from '../src/ServicoDePagamento.js'
import assert from 'node:assert';

describe('ServicoDePagamento', () => {
    let servico;

    beforeEach(() => {
        servico = new ServicoDePagamento();
    });

    it('deve adicionar um pagamento', () => {
        servico.pagar('123', 'Empresa A', 50);
        assert.strictEqual(servico.listaPagamentos.length, 1);
    });

    it('deve categorizar como "padrão" quando Valor <= 100', () => {
        servico.pagar('123', 'Empresa A', 100);
        assert.strictEqual(servico.listaPagamentos[0].categoria, 'padrão');
    });

    it('deve categorizar como "cara" quando Valor > 100', () => {
        servico.pagar('123', 'Empresa A', 150);
        assert.strictEqual(servico.listaPagamentos[0].categoria, 'cara');
    });

    it('deve retornar o último pagamento', () => {
        servico.pagar('111', 'Empresa A', 50);
        servico.pagar('222', 'Empresa B', 150);
        assert.strictEqual(servico.consultarUltimoPagamento().codigoBarras, '222');
    });

    it('deve retornar undefined quando lista está vazia', () => {
        assert.strictEqual(servico.consultarUltimoPagamento(), undefined);
    });
});