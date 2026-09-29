# XXII SBGFA 2028 — Uberlândia

Site da candidatura da **Universidade Federal de Uberlândia (UFU)** para sediar o
**XXII Simpósio Brasileiro de Geografia Física Aplicada (SBGFA)** em 2028.
Proposta do PPGGEO e do IGESC, apresentada no XXI SBGFA (Belém, UFPA, 2026).

Site estático (HTML + CSS + um pouco de JavaScript), sem dependências nem etapa de build.

## Estrutura

```
.
├── index.html            # página única com todas as seções
├── assets/
│   ├── css/style.css     # estilos (cores e fontes nas variáveis de :root)
│   ├── js/main.js        # menu no celular
│   └── img/              # emblema, foto do topo, logos institucionais e ícones
├── .nojekyll
└── README.md
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (por exemplo, `sbgfa2028`) e envie estes arquivos para a branch `main`.
2. No repositório, vá em **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Em alguns minutos o site fica disponível em `https://<seu-usuario>.github.io/sbgfa2028/`.

Para testar localmente, basta abrir o `index.html` no navegador.

## Como editar

- **Textos:** estão todos no `index.html`, organizados por seção (`#sobre`, `#tema`, `#eixos`, `#obras`, `#historico`, `#ufu`, `#local`).
- **Cores e fontes:** variáveis no início do `assets/css/style.css`.
- **Imagens:** substitua os arquivos em `assets/img/` mantendo os mesmos nomes.

## Pendências

- Tema e eixos ainda estão **em construção**.
- Datas, programação, inscrições e hospedagem ainda não definidas.
- Duração proposta: 3 a 5 dias, ainda em definição.
- Confirmar a sede do XIV SBGFA (2011): UFGD ou UFMS.
- Temas das edições I a X ainda não incluídos.
- Se a candidatura for aprovada, ajustar os textos que falam em "proposta" e "candidatura".
