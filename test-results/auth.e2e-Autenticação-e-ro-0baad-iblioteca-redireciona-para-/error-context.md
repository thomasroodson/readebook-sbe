# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - button "Open Next.js Dev Tools" [ref=e7] [cursor=pointer]:
    - img [ref=e8]
  - alert [ref=e11]
  - generic [ref=e13]:
    - generic [ref=e15]:
      - paragraph [ref=e16]: A room without books is like a body without a soul.
      - text: — Cicero
    - generic [ref=e17]:
      - heading "Entrar" [level=1] [ref=e18]
      - paragraph [ref=e19]: Bem-vindo de volta ao seu santuário de leitura. Faça login para acessar sua coleção.
      - generic [ref=e20]:
        - generic [ref=e21]:
          - img [ref=e22]
          - generic [ref=e25]:
            - generic [ref=e26]: E-mail
            - textbox "E-mail" [ref=e27]:
              - /placeholder: seu@email.com
        - generic [ref=e28]:
          - img [ref=e29]
          - generic [ref=e32]:
            - generic [ref=e33]: Senha
            - textbox "Senha" [ref=e34]:
              - /placeholder: ••••••••
        - button "Entrar" [ref=e35] [cursor=pointer]:
          - text: Entrar
          - img [ref=e36]
      - paragraph [ref=e38]: Acesso seguro • Gerenciado pelo seu bibliotecário local
      - generic [ref=e39]:
        - link "Esqueci minha senha" [ref=e40] [cursor=pointer]:
          - /url: /recuperar-senha
        - link "Criar conta" [ref=e41] [cursor=pointer]:
          - /url: /cadastro
```