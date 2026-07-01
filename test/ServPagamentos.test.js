import { test, expect } from "@playwright/test";
import { ServicoDePagamento } from "../src/ServicoDePagamento.js";

test.describe("ServicoDePagamento", () => {
  let servico;

  test.beforeEach(() => {
    servico = new ServicoDePagamento();
  });

  test("deve adicionar um pagamento", async () => {
    servico.pagar("123", "Empresa A", 50);
    expect(servico.listaPagamentos).toHaveLength(1);
  });

  test('deve categorizar como "padrão" quando Valor <= 100', async () => {
    servico.pagar("123", "Empresa A", 100);
    expect(servico.listaPagamentos[0].categoria).toBe("padrão");
  });

  test('deve categorizar como "cara" quando Valor > 100', async () => {
    servico.pagar("123", "Empresa A", 150);
    expect(servico.listaPagamentos[0].categoria).toBe("cara");
  });

  test("deve retornar o último pagamento", async () => {
    servico.pagar("111", "Empresa A", 50);
    servico.pagar("222", "Empresa B", 150);
    expect(servico.consultarUltimoPagamento().codigoBarras).toBe("222");
  });

  test("deve retornar undefined quando lista está vazia", async () => {
    expect(servico.consultarUltimoPagamento()).toBeUndefined();
  });
});
