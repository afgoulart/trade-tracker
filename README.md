# README.md

# Trader Monitor

Este projeto é uma aplicação desenvolvida com NestJS que utiliza a API da Trader View para monitorar ativos em tempo real.

## Estrutura do Projeto

- `src/main.ts`: Ponto de entrada da aplicação.
- `src/app.module.ts`: Módulo principal que importa outros módulos necessários.
- `src/config/config.service.ts`: Classe responsável por carregar as configurações da aplicação.
- `src/trader/trader.module.ts`: Módulo do trader que agrupa o serviço e o controlador.
- `src/trader/trader.service.ts`: Interage com a API da Trader View.
- `src/trader/trader.controller.ts`: Define os endpoints da API.
- `src/trader/dto/asset.dto.ts`: DTO para validação de dados de entrada.
- `src/trader/interfaces/asset.interface.ts`: Interface que descreve a estrutura dos dados de um ativo.
- `src/trader/entities/asset.entity.ts`: Representa a entidade de um ativo no banco de dados.
- `src/websocket/websocket.gateway.ts`: Gerencia conexões WebSocket e comunicação em tempo real.
- `src/websocket/websocket.module.ts`: Módulo do websocket.
- `test/trader.service.spec.ts`: Testes unitários para o `TraderService`.
- `.env`: Variáveis de ambiente necessárias para a configuração.
- `package.json`: Configuração do npm com dependências e scripts.
- `nest-cli.json`: Configurações específicas do Nest CLI.
- `tsconfig.json`: Configuração do TypeScript.

## Instalação

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Inicie a aplicação com `npm run start`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias e correções.