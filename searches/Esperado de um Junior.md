# Como um dev júnior deve se proteger legalmente

## Seguir padrões reconhecidos
- WCAG 3.0 (nível >= prata)
- e-MAG

## Desenvolver com acessibilidade desde o início
- Usar HTML semântico
- Aplicar `aria-*` corretamente
- Garantir navegação por teclado
- Garantir contraste mínimo (4.5:1)
- Adicionar `alt` em todas as imagens
- Criar formulários com labels claros
- Exibir mensagens de erro compreensíveis

## Testar continuamente
- Rodar Lighthouse
- Rodar axe DevTools
- Rodar WAVE
- Testar manualmente com teclado
- Testar com leitor de tela

---

# Documentos e validações que comprovam conformidade com a LBI

## Documentos
- Histórias de usuário com requisito de acessibilidade
- Critérios de aceite baseados em WCAG/e-MAG
- Protótipos com validação de contraste e navegação
- Checklist de acessibilidade em code review
- Documentação técnica das decisões
- Página de acessibilidade do produto

## Validações (provas técnicas)
Relatórios de:
- Lighthouse (score ≥ 90)
- axe DevTools (sem erros críticos)
- WAVE (sem falhas graves)

## Testes manuais registrados
- Navegação 100% por teclado
- Uso com leitor de tela

## Métricas objetivas
- 100% das imagens com `alt`
- 100% dos fluxos acessíveis por teclado
- Contraste mínimo atendido