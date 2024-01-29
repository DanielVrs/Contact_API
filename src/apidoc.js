/**
 * @api {post} /user Cria um novo usuário.
 * @apiName CreateNewUser
 * @apiGroup User
 *
 *
 * @apiParam {String} fullName Nome completo do usuário.
 * @apiParam {String} email Endereço de e-mail do usuário.
 * @apiParam {String} password Senha do usuário.
 * @apiParam {String} fone Número de telefone do usuário.
 *
 * @apiSuccess {String} id ID único do usuário criado.
 * @apiSuccess {String} fullName Nome completo do usuário.
 * @apiSuccess {String} email Endereço de e-mail do usuário.
 * @apiSuccess {String} fone Número de telefone do usuário.
 * @apiSuccess {String} createdAt Data e hora de criação do usuário.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 201 Created
 *     {
 *       "id": "2a7356af-f733-46f8-b491-dd3076f2e36b",
 *       "fullName": "nome completo do usuário",
 *       "email": "mail@email.com",
 *       "fone": "123456",
 *       "createdAt": "2024-01-26T17:35:18.733Z"
 *     }
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 409 : Email já cadastrado:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "message": "Email already exists"
 *     }

 * @apiErrorExample {json} Error 409 : Nome já cadastrado:
 *     HTTP/1.1 409 Conflict
 *     {
 *       "message": "Full name already exists"
 *     }
 * @apiErrorExample {json} Error 500 : Erro na requisição:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao criar o usuário."
 *     }
 */

/**
 * @api {get} /user Lista todos os usuários {Aut: Obrigatória}
 * @apiName ReadAllUsers
 * @apiGroup User
 *
 * @apiSuccess {Object[]} users Lista de usuários.
 * @apiSuccess {String} users.id ID único do usuário.
 * @apiSuccess {String} users.fullName Nome completo do usuário.
 * @apiSuccess {String} users.email Endereço de e-mail do usuário.
 * @apiSuccess {String} users.fone Número de telefone do usuário.
 * @apiSuccess {String} users.createdAt Data e hora de criação do usuário no formato ISO 8601.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *       "id": "2a7356af-f733-46f8-b491-dd3076f2e36b",
 *       "fullName": "nome completo do usuário",
 *       "email": "mail@email.com",
 *       "fone": "123456",
 *       "createdAt": "2024-01-26T17:35:18.733Z",
 *       "_count": {
 *			"contacts": 4,
 *		    "meansOfContacts": 6
 *       },
 *       {
 *       "id": "2a7356af-f733-46f8-b491-dd3076f2e36b",
 *       "fullName": "nome completo do usuário",
 *       "email": "mail@email.com",
 *       "fone": "123456",
 *       "createdAt": "2024-01-26T17:35:18.733Z",
 *       "_count": {
 *			"contacts": 2,
 *		    "meansOfContacts": 0
 *       },
 *       // ... outros usuários
 *     ]
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 500 : Erro na requisição:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao listar os usuários."
 *     }
 */

/**
 * @api {get} /user/:userId Obtém um usuário pelo ID {Aut: Obrigatória}
 * @apiName ReadUserById
 * @apiGroup User
 *
 * @apiParam {String} userId ID único do usuário / Deve ser enviado por query params.
 *
 * @apiSuccess {String} id ID único do usuário.
 * @apiSuccess {String} fullName Nome completo do usuário.
 * @apiSuccess {String} email Endereço de e-mail do usuário.
 * @apiSuccess {String} fone Número de telefone do usuário.
 * @apiSuccess {String} createdAt Data e hora de criação do usuário no formato ISO 8601.
 * @apiSuccess {Object[]} contacts Lista de contatos do usuário.
 * @apiSuccess {Object[]} meansOfContacts Lista dos meios de contato do usuário.
 * @apiSuccess {Object} _count Contagem de contatos e meios de contato do usuário.
 * @apiSuccess {Number} _count.contacts Número total de contatos do usuário.
 * @apiSuccess {Number} _count.meansOfContacts Número total de meios de contato do usuário.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "2a7356af-f733-46f8-b491-dd3076f2e36b",
 *       "fullName": "nome completo do usuário",
 *       "email": "mail@email.com",
 *       "fone": "123456",
 *       "createdAt": "2024-01-26T17:35:18.733Z
 *       "contacts": [],
 *       "meansOfContacts": [],
 *       "_count": {
 *         "contacts": 0,
 *         "meansOfContacts": 0
 *       }
 *     }
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 404 : Usuário não encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User not found"
 *     }
 */

/**
 * @api {patch} /user Atualiza os dados do usuário logado {Aut: Obrigatória}
 * @apiName UpdateUserById
 * @apiGroup User
 * 
 * @apiParam {String} [fullName] Novo nome completo do usuário.
 * @apiParam {String} [email] Novo endereço de e-mail do usuário.
 * @apiParam {String} [fone] Novo número de telefone do usuário.
 *
 * @apiSuccess {String} id ID único do usuário.
 * @apiSuccess {String} fullName Nome completo atualizado do usuário.
 * @apiSuccess {String} email Endereço de e-mail atualizado do usuário.
 * @apiSuccess {String} fone Número de telefone atuaram {String} fullName(opcional) Novo nome completo do usuário.
 * @apiParam {String} email(opcional) Novo endereço de e-mail do usuário.
 * @apiParam {String} fone(opcional) Novo número de telefone do usuário.
 *
 * @apiSuccess {String} id ID único do usuário.
 * @apiSuccess {String} fullName Nome completo atualizado do usuário.
 * @apiSuccess {String} email Endereço de e-mail atualizado do usuário.
 * @apiSuccess {String} fone Número de telefone atualizado do usuário.
 * @apiSuccess {String} createdAt Data e hora de criação do usuário no formato ISO 8601.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "2a7356af-f733-46f8-b491-dd3076f2e36b",
 *       "fullName": "nome completo do usuário",
 *       "email": "mail@email.com",
 *       "fone": "123456",
 *       "createdAt": "2024-01-26T17:35:18.733Z"
 *     }
 *
 
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 500 : Erro na requisição:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao atualizar o usuário."
 *     }
 */

/**
 * @api {delete} /user Deleta o usuário esta logado {Aut: Obrigatória}
 * @apiName DeleteUserById
 * @apiGroup User
 *

 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 204 No Content
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401: Credenciais inválidas:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 500 : Erro na requisição:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao atualizar o usuário."
 *     }
 */

/**
 * @api {post} /login Realiza o login do usuário
 * @apiName UserLogin
 * @apiGroup Authentication
 *
 * @apiParam {String} email Endereço de e-mail do usuário.
 * @apiParam {String} password Senha do usuário.
 *
 * @apiSuccess {String} token Token de autenticação gerado para o usuário.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...."
 *     }
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401: Credenciais inválidas:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid credentials"
 *     }
 *
 * @apiErrorExample {json} Error 500: Falha no login:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao realizar o login."
 *     }
 */

/**
 * @api {post} /contact Cria um novo contato para o Usuário logado  {Aut: Obrigatória}
 * @apiName CreateContact
 * @apiGroup Contact
 *
 * @apiParam {String} fullName Nome completo do contato.
 * @apiParam {String} email Endereço de e-mail do contato.
 * @apiParam {String} fone Número de telefone do contato.
 *
 * @apiSuccess {String} id ID único do contato.
 * @apiSuccess {String} fullName Nome completo do contato.
 * @apiSuccess {String} email Endereço de e-mail do contato.
 * @apiSuccess {String} fone Número de telefone do contato.
 * @apiSuccess {String} createdAt Data e hora de criação do contato no formato ISO 8601.
 * @apiSuccess {String} userId ID do usuário associado ao contato.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 201 Created
 *     {
 *       "id": "5f693d4d-bdd0-4f0f-a810-cd2b93122f5a",
 *       "fullName": "Nome completo",
 *       "email": "email@email.com",
 *       "fone": "12345",
 *       "createdAt": "2024-01-26T12:28:32.963Z",
 *       "userId": "682350db-72c3-471a-8011-83599ff1bd89"
 *     }
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 500 : Erro na requisição:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao criar o contato."
 *     }
 */

/**
 * @api {get} /contact Lista todos os contatos {Aut: Obrigatória}
 * @apiName ReadAllContacts
 * @apiGroup Contact
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *       "id": "5f693d4d-bdd0-4f0f-a810-cd2b93122f5a",
 *       "fullName": "Nome completo",
 *       "email": "email@email.com",
 *       "fone": "12345",
 *       "createdAt": "2024-01-26T12:28:32.963Z",
 *       "userId": "682350db-72c3-471a-8011-83599ff1bd89",
 *       "_count": {
 *		    "meansOfContacts": 6
 *       },
 *       {
 *       "id": "5f693d4d-bdd0-4f0f-a810-cd2b93122f5a",
 *       "fullName": "Nome completo",
 *       "email": "email@email.com",
 *       "fone": "12345",
 *       "createdAt": "2024-01-26T12:28:32.963Z",
 *       "userId": "682350db-72c3-471a-8011-83599ff1bd89",
 *       "_count": {
 *		    "meansOfContacts": 6
 *       },
 *       // outros contatos
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 500 : Erro na requisição:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao listar os contatos."
 *     }
 */

/**
 * @api {get} /contact/:contactId Obtém um contato pelo ID {Aut: Obrigatória}
 * @apiName ReadContactById
 * @apiGroup Contact
 *
 * @apiParam {String} contactId ID único do contato/ Deve ser enviado por query params.
 *
 * @apiSuccess {String} id ID único do contato.
 * @apiSuccess {String} fullName Nome completo do contato.
 * @apiSuccess {String} email Endereço de e-mail do contato.
 * @apiSuccess {String} fone Número de telefone do contato.
 * @apiSuccess {String} createdAt Data e hora de criação do contato no formato ISO 8601.
 * @apiSuccess {Object[]} meansOfContacts Lista dos meios de contato associados ao contato.
 * @apiSuccess {String} meansOfContacts.id ID único do meio de contato.
 * @apiSuccess {String} meansOfContacts.email Endereço de e-mail do meio de contato.
 * @apiSuccess {String} meansOfContacts.fone Número de telefone do meio de contato.
 * @apiSuccess {String} meansOfContacts.contactId ID do contato associado ao meio de contato.
 * @apiSuccess {String} meansOfContacts.userId ID do usuário associado ao meio de contato.
 * @apiSuccess {String} userId ID do usuário associado ao contato.
 * @apiSuccess {Object} _count Contagem de meios de contato associados ao contato.
 * @apiSuccess {Number} _count.meansOfContacts Número total de meios de contato associados ao contato.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "5f693d4d-bdd0-4f0f-a810-cd2b93122f5a",
 *       "fullName": "Nome completo",
 *       "email": "email@email.com",
 *       "fone": "1862386381",
 *       "createdAt": "2024-01-26T12:28:32.963Z",
 *       "meansOfContacts": [
 *         {
 *           "id": "5004e412-7170-4f89-bf23-cc2c11652141",
 *           "email": "email@email.com",
 *           "fone": "1862386381",
 *           "contactId": "4120807f-1a2b-47d1-ba64-3573c1c328de",
 *           "userId": null
 *         },
 *         // ... outros meios de contato
 *       ],
 *       "userId": "682350db-72c3-471a-8011-83599ff1bd89",
 *       "_count": {
 *         "meansOfContacts": 3
 *       }
 *     }
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 404: Contato não encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Contact not found"
 *     }
 */

/**
 * @api {patch} /contact/:contactId Atualiza um contato pelo ID {Aut: Obrigatória}
 * @apiName UpdateContactById
 * @apiGroup Contact
 *
 * @apiParam {String} contactId ID único do contato/ Deve ser enviado por query params.
 * @apiParam {String} [fullName] Novo nome completo do contato.
 * @apiParam {String} [email] Novo endereço de e-mail do contato.
 * @apiParam {String} [fone] Novo número de telefone do contato.
 *
 * @apiSuccess {String} id ID único do contato.
 * @apiSuccess {String} fullName Nome completo atualizado do contato.
 * @apiSuccess {String} email Endereço de e-mail atualizado do contato.
 * @apiSuccess {String} fone Número de telefone atualizado do contato.
 * @apiSuccess {String} createdAt Data e hora de criação do contato no formato ISO 8601.
 * @apiSuccess {String} userId ID do usuário associado ao contato.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "5f693d4d-bdd0-4f0f-a810-cd2b93122f5a",
 *       "fullName": "Nome completo",
 *       "email": "email@email.com",
 *       "fone": "12345",
 *       "createdAt": "2024-01-26T12:28:32.963Z",
 *       "userId": "682350db-72c3-471a-8011-83599ff1bd89"
 *     }
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 404: Contato não encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Contact not found"
 *     }
 */

/**
 * @api {delete} /contact/:contactId Deleta um contato pelo ID {Aut: Obrigatória}
 * @apiName DeleteContactById
 * @apiGroup Contact
 *
 * @apiParam {String} id ID único do contato/ Deve ser enviado por query params.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 204 No Content
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 404: Contato não encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Contact not found"
 *     }
 */

/**
 * @api {post} /user/report Gera um relatório PDF de contatos do usuário logado.
 * @apiName GeneratePdfReport
 * @apiGroup Report
 *
 * @apiSuccess {File} Relatorio PDF contendo os contatos do usuário.
 *
 * @apiSuccessExample {file} Sucesso:
 *     HTTP/1.1 200 OK
 *     File: SeuRelatorio.pdf
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Erro na requisição:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao gerar o relatório PDF."
 *     }
 */

/**
 * @api {post} /meanOfContact Cria meio de contato extra para o usuário Logado {Aut: Obrigatória}
 * @apiName CreateMeanOfContactToUser
 * @apiGroup MeanOfContact
 *
 * @apiParam {String} email Endereço de e-mail do meio de contato.
 * @apiParam {String} fone Número de telefone do meio de contato.
 *
 * @apiSuccess {String} id ID único do meio de contato.
 * @apiSuccess {String} email Endereço de e-mail do meio de contato.
 * @apiSuccess {String} fone Número de telefone do meio de contato.
 * @apiSuccess {String} contactId ID do contato associado ao meio de contato (pode ser nulo).
 * @apiSuccess {String} userId ID do usuário associado ao meio de contato.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "b43e08c7-71e9-42fc-a4d8-04e221dca3a5",
 *       "email": "email@email.com",
 *       "fone": "1862386381",
 *       "contactId": null,
 *       "userId": "682350db-72c3-471a-8011-83599ff1bd89"
 *     }
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 500: Erro na requisição:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao criar o meio de contato."
 *     }
 */

/**
 * @api {post} /meanOfContact/:contactId Cria meio de contato extra para um contato {Aut: Obrigatória}
 * @apiName CreateMeanOfContactToContact
 * @apiGroup MeanOfContact
 * 
 * @apiParam {String} meanOfContactId ID único do meio de contato a ser atualizado / Deve ser enviado por query params.

 * @apiParam {String} email Endereço de e-mail do meio de contato.
 * @apiParam {String} fone Número de telefone do meio de contato.
 *
 * @apiSuccess {String} id ID único do meio de contato.
 * @apiSuccess {String} email Endereço de e-mail do meio de contato.
 * @apiSuccess {String} fone Número de telefone do meio de contato.
 * @apiSuccess {String} contactId ID do contato associado ao meio de contato (pode ser nulo).
 * @apiSuccess {String} userId ID do usuário associado ao meio de contato.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "b43e08c7-71e9-42fc-a4d8-04e221dca3a5",
 *       "email": "email@email.com",
 *       "fone": "1862386381",
 *       "contactId": "682350db-72c3-471a-8011-83599ff1bd89",
 *       "userId": null
 *     }meanOfContact not foundis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 404: Contato não encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Contact not found"
 *     }
 * @apiErrorExample {json} Error 500: Erro na requisição:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao criar o meio de contato."
 *     }
 */

/**
 * @api {get} /meanOfContact Obtém todos os meios de contato registrados {Aut: Obrigatória}
 * @apiName ReadAllMeanOfContact
 * @apiGroup MeanOfContact
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "id": "6188d34c-c49c-44dd-9bd4-5c86eee83524",
 *         "email": "email@email.com",
 *         "fone": "1862386381",
 *         "contactId": null,
 *         "userId": "682350db-72c3-471a-8011-83599ff1bd89"
 *       },
 *       {
 *         "id": "5004e412-7170-4f89-bf23-cc2c11652141",
 *         "email": "danielmeanofcontact@email.com",
 *         "fone": "1862386381",
 *         "contactId": "4120807f-1a2b-47d1-ba64-3573c1c328de",
 *         "userId": null
 *       },
 *       // ... outros meios de contato
 *     ]
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 500: Erro na requisição:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Erro ao obter os meios de contato."
 *     }
 */

/**
 * @api {get} /readMeanOfContact/:meanOfContactId Obtém um meio de contato pelo ID {Aut: Obrigatória}
 * @apiName ReadMeanOfContactById
 * @apiGroup MeanOfContact
 *
 * @apiParam {String} meanOfContactId ID único do meio de contato/ Deve ser enviado por query params.
 *
 * @apiSuccess {String} id ID único do meio de contato.
 * @apiSuccess {String} email Endereço de e-mail do meio de contato.
 * @apiSuccess {String} fone Número de telefone do meio de contato.
 * @apiSuccess {String} contactId ID do contato associado ao meio de contato (pode ser nulo).
 * @apiSuccess {String} userId ID do usuário associado ao meio de contato.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "6188d34c-c49c-44dd-9bd4-5c86eee83524",
 *       "email": "danielmeanofcontact@email.com",
 *       "fone": "1862386381",
 *       "contactId": null,
 *       "userId": "682350db-72c3-471a-8011-83599ff1bd89"
 *     }
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 404: Meio de contato não encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "mean of contact not found."
 *     }
 */

/**
 * @api {patch} /meanOfContact/:meanOfContactId Atualiza um meio de contato pelo ID {Aut: Obrigatória}
 * @apiName UpdateMeanOfContactById
 * @apiGroup MeanOfContact
 *
 * @apiParam {String} meanOfContactId ID único do meio de contato/ Deve ser enviado por query params.

 

 * @apiParam {String} [email] Novo endereço de e-mail do meio de contato.
 * @apiParam {String} [fone] Novo número de telefone do meio de contato.
 * @apiParam {String} [contactId] Novo ID do contato associado ao meio de contato (pode ser nulo).
 *
 * @apiSuccess {String} id ID único do meio de contato atualizado.
 * @apiSuccess {String} email Endereço de e-mail do meio de contato atualizado.
 * @apiSuccess {String} fone Número de telefone do meio de contato atualizado.
 * @apiSuccess {String} contactId ID do contato associado ao meio de contato atualizado (pode ser nulo).
 * @apiSuccess {String} userId ID do usuário associado ao meio de contato.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "6188d34c-c49c-44dd-9bd4-5c86eee83524",
 *       "email": "testedeupdatedemeanOfContact@email.com",
 *       "fone": "1862386381",
 *       "contactId": null,
 *       "userId": "682350db-72c3-471a-8011-83599ff1bd89"
 *     }
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 404: Meio de contato não encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "mean of contact not found."
 *     }
 */

/**
 * @api {delete} /meanOfContact/:meanOfContactId Deleta um meio de contato pelo ID {Aut: Obrigatória}
 * @apiName DeleteMeanOfContactById
 * @apiGroup MeanOfContact
 *
 * @apiParam {String} meanOfContactId ID único do meio de contato / deve ser enviado por query params.
 *
 * @apiSuccessExample {json} Sucesso:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "6188d34c-c49c-44dd-9bd4-5c86eee83524",
 *       "email": "testedeupdatedemeanOfContact@email.com",
 *       "fone": "1862386381",
 *       "contactId": null,
 *       "userId": "682350db-72c3-471a-8011-83599ff1bd89"
 *     }
 *
 * @apiError (Error) Errors Possíveis erros listados abaixo.
 * @apiErrorExample {json} Error 401 : Ausência de token:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Missing bearer token"
 *     }
 * @apiErrorExample {json} Error 404: Meio de contato não encontrado:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "mean of contact not found."
 *     }
 */
