Help.load({
    //USERNAME 
    'user.username': 'Username used to login into the panel.',
    'user.password': 'Password used to login into the panel.',
    'user.id_group': 'There are 3 groups: admin, agent and client. You can create more or edit any of these groups. Each group can have specific permissions. Check the menu Configuration->User Group.',
    'user.id_group_agent': 'The group that the agent\'s clients will be part of.',
    'user.id_plan': 'Which plan will be used to bill calls for this user.',
    'user.prefix_local': 'Click here for more info|https://www.magnusbilling.org/local_prefix',
    'user.active': 'Only active users can login into the panel and make calls',
    'user.country': 'Used to CID Callback. The country prefix code will be added before the CID to convert the CID to E164',
    'user.id_offer': 'Used to give free minutes. You need to add your package in the menu: Rates->Offer.',
    'user.cpslimit': 'How many Calls Per Second this user can send? The excess will receive CONGESTION.',
    'user.vat': 'Used with some payment gateways.',
    'user.typepaid': 'If you select Post-paid it\' necessary to set a credit limit.',
    'user.creditlimit': 'If the user is Post-paid, the user will be able to make calls until he reaches this limit.',
    'user.credit_notification': 'If the user\'s credit is lower than this value, MagnusBilling will try to send an e-mail. YOU NEED TO CONFIGURE SMTP.',
    'user.enableexpire': 'Makes the user expire at a determined date.',
    'user.expirationdate': 'The date that the user will expire and be deactivated.',
    'user.callshop': 'Activates the Callshop module. It\'s necessary to give permissions to this group.',
    'user.mix_monitor_format': 'What format will used to record calls. Activate recording in the menu: Users->SIP Accounts.',
    'user.disk_space': 'Insert the amount disk space available to record, in GB. Use -1 to remove the limit.',
    'user.calllimit': 'How many simultaneous calls this user can have? The excess will receive CONGESTION.',
    'user.calllimit_error': '',
    'user.sipaccountlimit': 'How many SIP Accounts this user can create. You need to add permissions to the user\'s group to allow the creation of new SIP Accouts. You can also use the Services menu to control permissions.',
    'user.callingcard_pin': 'Used to authenticate thorugh CallingCard.',
    'user.restriction': 'Used to restrict dialing. Add the numbers in the menu: Users->Restricted Numbers.',
    'user.record_call': 'When you change this field it will change the Record Call setting to all SIP Accounts owned by this user. You can set the user\'s Record Call setting to NO and activate Record Call individually for each SIP Account. This setting needs to be activated to record incoming DID calls.',
    //SIP ACCOUNT
    'sip.defaultuser': 'Username used to login in a SIP device.',
    'sip.secret': 'Password to login in a SIP device.',
    'sip.callerid': 'The Caller ID number. Your trunk needs to accept CLI.',
    'sip.disallow': 'Disallow all codecs and then select the codecs available below to enable them to the user.',
    'sip.host': 'If you want authenticate via IP address set the user\'s IP address here. Remember to also remove the user\'s password and set invites to insecure.',
    'sip.group': 'Used for incomming calls. Makes the call ring more than one SIP account, ringing all the accounts in the same group. You can create groups with any string.',
    'sip.block_call_reg': 'You can block calls with a regular expression. For example, if you want block all calls that start with a 9, use regex ^9 ',
    'sip.nat': 'Click here for more info|https://www.voip-info.org/asterisk-sip-nat/',
    'sip.directmedia': 'If enabled, Asterisk tries to redirect the RTP media stream to go directly from the caller to the callee.',
    'sip.qualify': 'Send OPTION to user CONTACT field to qualify the user.',
    'sip.context': 'Only change this if you know what you\'re doing.',
    'sip.insecure': 'Needs to be NO if the host is dynamic. To IP authenticate set to invite.',
    'sip.allowtransfer': 'Enable it to allow transfers between SIP accounts.',
    'sip.ringfalse': 'If YES, generate a ringing tone for the calling party.',
    'sip.calllimit': 'Maximum simultaneous calls',
    'sip.dial_timeout': 'Timeout in seconds to wait for the call to be picked-up.',
    'sip.alias': 'Alias to dial between sip accounts from the same AccountCode (company).',
    //ATA LIKKSYS/SIPURA
    'sipuras.nserie': 'LinkSys serial number',
    'sipuras.macadr': 'LinkSys MAC address',
    'sipuras.senha_user': 'User to set in LinkSys configuration',
    'sipuras.senha_admin': 'Pass to set in LinkSys configuration',
    'sipuras.antireset': 'Prevent resetting LinkSys with *73738#',
    'sipuras.Enable_Web_Server': 'Enabling/Disabling LinkSys configuration WebPage',
    'sipuras.User_ID_1': 'SIP Account username',
    'sipuras.Password_1': 'SIP Account password',
    'sipuras.Use_Pref_Codec_Only_1': 'Only use the preferred CODEC',
    'sipuras.Preferred_Codec_1': 'Set the preferred CODEC',
    'sipuras.Register_Expires_1': 'Interval in seconds that LinkSys will send a REGISTER to your server. Useful to avoid a loss of connection when you receive a call.',
    'sipuras.Dial_Plan_1': 'Read LinkSys documentation',
    'sipuras.NAT_Mapping_Enable_1_': '',
    'sipuras.NAT_Keep_Alive_Enable_1_': '',
    'sipuras.STUN_Enable': '',
    'sipuras.STUN_Test_Enable': '',
    'sipuras.Substitute_VIA_Addr': '',
    'sipuras.STUN_Server': '',
    //ONLINE CALLS
    'callonline.ndiscado': 'Dialed number',
    'callonline.callerid': 'The CID number.',
    'callonline.billsec': 'Time in seconds after the call was answered.',
    'callonline.codec': 'Codec used',
    'callonline.reinvite': 'If set to YES, means the RTP audio was sent directly between callee and caller',
    'callonline.from_ip': 'IP of the caller',
    //CALLERID
    'callerid.cid': 'The number to CID authenticate with CallingCard. Use the exact format that you received the callerID from your DID provider.',
    //RESTRICTED NUMBERS
    'restrictedphonenumber.number': 'You can use the complete number or only one part. If you select \'Only call for restricted numbers\' and add the number 1360888777, this user won\'t call this number. If you add only a part of the number, like 1360, your user won\'t be able to call any number that starts with 1360',
    //TOKEN
    'gauthenticator.googleAuthenticator_enable': 'Enable/Disable Google Authenticator.',
    //VOUCHER
    'voucher.credit': 'How much credit is this voucher worth?',
    'voucher.id_plan': 'Select the plan that is going to be used to create the user when the voucher is redeemed.',
    'voucher.language': 'Language used to create the user when voucher when the voucher is redeemed.',
    'voucher.prefix_local': 'Local Prefix used to the create user when the voucher is redeemed.',
    'voucher.quantity': 'How many vouchers do you want to generate?',
    //USER RATE
    'userrate.id_user': 'Select the user that you want to set the tariff to.',
    'userrate.id_prefix': 'Select the prefix that you want set the price.',
    'userrate.rateinitial': 'Sell price',
    'userrate.initblock': 'Initial block',
    'userrate.billingblock': 'Increment block',
    //TRUNK
    'services.return_credit': 'Return credit to the user if they cancel before the expiration date.',
    'trunk.trunkcode': '',
    'trunk.user': 'Only used if the authentication is via user and pass.',
    'trunk.secret': 'Only used if the authentication is via user and pass.',
    'trunk.host': 'IP or SIP',
    'trunk.trunkprefix': 'Add a prefix to send to your trunk.',
    'trunk.removeprefix': 'Remove a prefix to send to your trunk.',
    'trunk.allow': 'Select the codecs that are allowed in this trunk.',
    'trunk.providertech': 'You need install appropriate drive to use card like dgv extra Dongle.',
    'trunk.status': 'If you deactivate the Trunk, MagnusBilling will try to send it\'s calls to the selected backup Trunk.',
    'trunk.allow_error': 'If YES all calls but ANSWERED and CANCEL will be sent to a backup trunk.',
    'trunk.register': 'Do your trunk needs to REGISTER? Don\' try to register a trunk authenticated via IP.',
    'trunk.register_string': '',
    'trunk.fromuser': 'Many SIP providers require this. Normally it\'s a username.',
    'trunk.fromdomain': 'Set the Trunk IP or SIP, if required.',
    'trunk.language': '',
    'trunk.context': 'Only change if you know what you are doing.',
    'trunk.dtmfmode': 'Set default dtmfmode for sending DTMF. Default: rfc2833 Other options: info : SIP INFO messages (application/dtmf-relay) shortinfo : SIP INFO messages (application/dtmf) inband : Inband audio (requires 64 kbit codec -alaw, ulaw) auto : Use rfc2833 if offered, inband otherwise.',
    'trunk.insecure': '',
    'trunk.maxuse': 'Maximum simultaneous call. If you set it, your server will need to use a lot of resources to control it. Not recommended.',
    'trunk.nat': '',
    'trunk.directmedia': '',
    'trunk.qualify': '',
    'trunk.type': '',
    'trunk.disallow': '',
    'trunk.addparameter': '',
    'trunk.link_sms': 'Set your SMS link here to send SMS. Replace: number variable per %number% and text per %text%. EXAMPLE. Your SMS URL is http://trunkWebSite.com/sendsms.php?user=magnus&pass=billing&number=XXXXXX&sms_text=SSSSSSSSSSS. replace XXXXXX per %number and SSSSSSSSSSS per %text% ',
    'trunk.sms_res': 'Leave it empty to not wait URL result. If you want wait the any success message, write here the expected result.',
    'trunk.port': 'If you want to use a different than 5060, you will need open the port in IPTABLES.',
    'trunk.encryption': 'Whether to offer SRTP encrypted media (ONLY TO SRTP).',
    'trunk.transport': 'Enable TLS transport. You need to install a certificate on Asterisk.',
    //TEMPLATE MAIL
    'templatemail.fromname': '',
    'templatemail.fromemail': '',
    'templatemail.subject': '',
    //SMTPS
    'smtps.host': 'YOU NEED TO CHECK IF YOUR DATACENTER DOESN\'T BLOCK EMAIL PORTS',
    'smtps.username': '',
    'smtps.password': '',
    'smtps.port': '',
    'smtps.encryption': '',
    //SMS
    'sms.telephone': 'Needs to be in E164 format',
    'sms.sms': '',
    //SERVICES 
    'services.type': '',
    'services.name': '',
    'services.calllimit': '',
    'services.disk_space': 'Insert the space available to record in GB.',
    'services.sipaccountlimit': '',
    'services.moneyfield': '',
    'services.textarea': '',
    //SERVICES USE
    'servicesuse.id': '',
    'servicesuse.price': '',
    'servicesuse.method': '',
    //SERVERS
    'servers.host': 'This menu is exclusive to companies that use MagnusBilling\'s slaves or proxy servers.',
    'servers.username': '',
    'servers.password': '',
    'servers.port': '',
    'servers.type': '',
    'servers.weight': '',
    'servers.status': '',
    'servers.description': '',
    //REFILL PROVIDER
    'refillprovider.credit': '',
    'refillprovider.description': '',
    'refillprovider.payment': '',
    //REFILL
    'refill.credit': '',
    'refill.description': '',
    'refill.payment': 'This setting is only to your control, the credit will be released to the user anyway if set to Payment NO',
    'refill.invoice_number': '',
    //RATE CALL SHOP
    'ratecallshop.dialprefix': '',
    'ratecallshop.destination': '',
    'ratecallshop.buyrate': '',
    'ratecallshop.minimo': '',
    'ratecallshop.block': '',
    'ratecallshop.minimal_time_charge': '',
    //RATE
    'rate.id_plan': 'The plan that you want to create a tariff for.',
    'rate.id_prefix': 'The prefix that you want create a tariff for.',
    'rate.id_trunk': 'Select the trunk to send call to that matches with this tariff.',
    'rate.buyrate': 'How much do you pay per minute to your provider?',
    'rate.buyrateinitblock': 'Minimum time in seconds to buy. E.g., if set to 30s and the call duration is 10s, charged for 30s.',
    'rate.buyrateincrement': 'This defines how the time is incremented after the minimum. E.g, if set to 6s and call duration is 32s, charged for 36.',
    'rate.minimal_time_buy': '',
    'rate.rateinitial': 'How much do you want to charge per minute?',
    'rate.initblock': 'Minimum time in seconds to buy. E.g., if set to 30s and the call duration is 21s, charged for 30s.',
    'rate.billingblock': 'This defines how the time is incremented after the minimum. E.g, if set to 6s and call duration is 32s, charged for 36.',
    'rate.minimal_time_charge': '',
    'rate.additional_grace': 'Aditional time to add to call duration. Ex: the call duration 20s and you add here 3s, will be charged 23 seconds.',
    'rate.package_offer': 'Set to yes if you want to include this tariff to a package offer.',
    'rate.status': '',
    //QUEUE MEMBER
    'queuemember.queue_name': '',
    'queuemember.interface': '',
    'queuemember.paused': '',
    //QUEUE
    'queue.name': '',
    'queue.language': '',
    'queue.strategy': '',
    'queue.ringinuse': 'If you want the queue to avoid sending calls to agents whose devices are known to be \'in use\' set this option to NO. ',
    'queue.timeout': 'How long the second member\'s phone ring until timeout.',
    'queue.retry': 'Time in seconds to try another agent.',
    'queue.wrapuptime': 'Time in seconds until the agent receives another call.',
    'queue.weight': 'Weight of queue - when compared to other queues, higher weights get the first try at available channels when the same channel is included in more than one queue.',
    'queue.periodic-announce': 'A set of periodic announcements can be created by separating each announcements to reproduce whit commas. E.g.: queue-periodic-announce,your-call-is-important,please-wait',
    'queue.periodic-announce-frequency': 'How often to make a periodic announcement.',
    'queue.announce-position': 'Queue position announce?',
    'queue.announce-holdtime': 'Should we include an estimated hold time in the position announcements?',
    'queue.announce-frequency': 'How often to announce queue position and/or estimated holdtime to caller 0=off',
    'queue.joinempty': '',
    'queue.leavewhenempty': '',
    'queue.ring_or_moh': '',
    'queue.musiconhold': '',
    //PROVIDER
    'provider.provider_name': 'Provider name',
    'provider.credit': 'How much credit do you have in your provider account? This field is optional.',
    'provider.credit_control': 'If you set to YES and your provider credit is < 0, all trunks from this provider will be deactivated.',
    'provider.description': '',
    //PREFIX
    'prefix.prefix': 'Prefix code. Prefix will be used to tariff and bill the calls.',
    'prefix.destination': 'Destination name.',
    //PLAN
    'plan.name': '',
    'plan.tariff_limit': 'Defines how many tariffs to search for. Only set to more than 1 if you use this plan with more than 1 tariff to the same prefix.',
    'plan.lcrtype': 'Defines how the tarrifs will be ordered if more than one tariff to the same prefix is found. Load balancer will use RAND function to balance the calls between the tariffs found.',
    'plan.signup': 'Display this plan in the signup form?',
    'plan.ini_credit': 'How much initial credit do you want to add to new users that select this plan in signup form?',
    'plan.play_audio': 'Should the system execute audios like: You not have enugh credit | Destination unreachable. If inactive, MagnusBilling will send 603.',
    'plan.portabilidadeMobile': '',
    'plan.portabilidadeFixed': '',
    'plan.techprefix': 'A code to make someone able to use this plan. E.g, User 12345 has the Golden plan, but he wants to send a call using the Silver plan. Therefore, you could set a tech prefix for the Silver plan, e.g. 77777. If the client wants to call \'1360888777\' with the Golden plan, just dial \'1360888777\'.  Dial \'777771360888777\' to use the Silver plan.',
    //PHONE NUMBER
    'phonenumber.number': 'Number to send calls/sms. Use only E164 format',
    'phonenumber.name': 'Used to TTS and SMS',
    'phonenumber.city': '',
    'phonenumber.status': 'The number\'s status will be changed to pending when MagnusBilling sends a call to your Trunk. If the call is completed, the status will be changed again to Sent. Otherwise it remains Pending. You can use the button Reprocess to reative all pending numbers.',
    'phonenumber.info': '',
    //PHONE BOOK
    'phonebook.name': '',
    'phonebook.status': '',
    'phonebook.description': '',
    //OFFER USE
    'offeruse.month_payed': '',
    'offeruse.reservationdate': '',
    //OFFER CDR
    'offercdr.used_secondes': '',
    'offercdr.date_consumption': '',
    //OFFER
    'offer.label': '',
    'offer.packagetype': '',
    'offer.freetimetocall': '',
    'offer.billingtype': '',
    'offer.price': '',
    //METHOD PAY
    'methodpay.payment_method': '',
    'methodpay.show_name': 'Name to show to user in the Buy Credit option.',
    'methodpay.id_user': '',
    'methodpay.country': '',
    'methodpay.active': 'Activate this payment gateway to users?',
    'methodpay.min': 'What\'s the minimum amount that you want to accept?',
    'methodpay.max': 'What\'s the maximum amount that you want to accept?',
    'methodpay.username': '',
    'methodpay.url': '',
    'methodpay.fee': 'Discount the Paypal fee from the paid amount.',
    'methodpay.boleto_banco': '',
    'methodpay.boleto_convenio': '',
    'methodpay.boleto_agencia': '',
    'methodpay.boleto_conta_corrente': '',
    'methodpay.boleto_inicio_nosso_numeroa': '',
    'methodpay.boleto_carteira': '',
    'methodpay.boleto_taxa': '',
    'methodpay.boleto_instrucoes': '',
    'methodpay.boleto_nome_emp': '',
    'methodpay.boleto_end_emp': '',
    'methodpay.boleto_cidade_emp': '',
    'methodpay.boleto_estado_emp': '',
    'methodpay.boleto_cpf_emp': '',
    'methodpay.pagseguro_TOKEN': '',
    'methodpay.P2P_CustomerSiteID': '',
    'methodpay.P2P_KeyID': '',
    'methodpay.P2P_Passphrase': '',
    'methodpay.P2P_RecipientKeyID': '',
    'methodpay.P2P_tax_amount': '',
    'methodpay.client_id': '',
    'methodpay.client_secret': '',
    //LOG USERS
    'logusers.id_log_actions': '',
    'logusers.ip': '',
    'logusers.description': '',
    //IVR
    'ivr.name': '',
    'ivr.monFriStart': 'Time to start weekly work interval',
    'ivr.monFriStop': 'Time to stop weekly work interval',
    'ivr.satStart': 'Time to start Saturday\'s work interval',
    'ivr.satStop': 'Time to start Saturday\'s work interval',
    'ivr.sunStart': 'Time to start Sunday\'s work interval',
    'ivr.sunStop': 'Time to start Sunday\'s work interval',
    'ivr.workaudio': 'Audio to execute when a call is received in between work interval',
    'ivr.noworkaudio': 'Audio to execute when a call is received out of the work interval',
    'ivr.direct_extension': 'Makes the caller able to type the SIP Account he wants to call directly. E.g, Press 1 to xxx, Press 2 to yyy or type the SIP Account.',
    //IAX
    'iax.username': '',
    'iax.secret': '',
    'iax.callerid': '',
    'iax.disallow': '',
    'iax.allow': '',
    'iax.host': '',
    'iax.nat': '',
    'iax.context': '',
    'iax.qualify': '',
    'iax.dtmfmode': '',
    'iax.insecure': '',
    'iax.type': '',
    'iax.calllimit': '',
    //GROUP USER GROUP
    'groupusergroup.name': '',
    //GROUP USER
    'groupuser.id': '',
    'groupuser.name': '',
    //FIREWALL
    'firewall.ip': '',
    'firewall.action': '',
    'firewall.description': '',
    //DID USE
    'diduse.reservationdate': '',
    //DID DESTINATION
    'diddestination.id_did': 'Select the DID that you want create new destination for.',
    'diddestination.activated': '',
    'diddestination.priority': 'You can create 5 destinations to your DID. If a try to the priority 1 is made and a error is received, MagnusBilling will try to send a call to the next destination priority available. Only works with the "Call SIP" type.',
    'diddestination.voip_call': '',
    'diddestination.destination': '',
    'diddestination.id_ivr': '',
    'diddestination.id_queue': '',
    'diddestination.id_sip': '',
    //DID
    'did.did': 'The exact number coming from the context. We recommend you to always use the E164 format.',
    'did.callerid': 'Use this field to set a fixed callerid, or leave blank to use the received callerid from the DID provider.',
    'did.connection_charge': 'Activation cost. E.g.: If \'Activation Cost\' is 5 and \'Monthly price\' is 10, then 15 credit is taken from the user\'s credit when you active the DID.',
    'did.fixrate': 'Monthly cost. This amount will be taken from the user\'s credit each month. The DID will be paid if the user has enough credit, otherwise the DID is released.',
    'did.activated': '',
    'did.connection_sell': 'This is the amount that will be taken from the user\'s credit when the DID is answered.',
    'did.minimal_time_charge': '',
    'did.initblock': 'Minimum time in seconds to buy. E.g., if set to 30s and the call duration is 10s, charged for 30s.',
    'did.increment': 'This defines how the time is incremented after the minimum. E.g, if set to 6s and call duration is 32s, charged for 36.',
    'did.charge_of': '',
    'did.calllimit': 'DID simultaneous calls',
    'did.expression_1': 'Use REGEX to able to bill the incomming calls by CallerID(ANI). E.g, if you are calling your DID and your number is 443432221234, suppose you want to charge all calls that start with 44 for 0.1. Therefore you can use ^44, and Sell price per min 0.1.',
    'did.selling_rate_1': 'Price per minute if the number matches the above regular expression.',
    'did.block_expression_1': 'Set to yes to block calls that matches with the above regular expression',
    'did.send_to_callback_1': 'Send this call to CallBack if it matches with the above regular expression',
    'did.expression_2': 'Same as the field above but you can use 3 REGEXes to bill with 3 diferent rules. E.g, on the first REGEX you want to charge 0.1 for numbers that start with 44, the second rule charges 0.2 for numbers that start with 447. Therefore you can use ^447 and Sell price per min 0.2.',
    'did.selling_rate_2': '',
    'did.block_expression_2': '',
    'did.send_to_callback_2': '',
    'did.expression_3': 'You can try to use REGEX in the 2 above rules to filter landline and mobile phones, and in this rule set to *, in order to get any number that doesn\'t match the previous rules, and set to block call that matches with this expression. It avoids billing issues if the callerid comes with a invalid format.',
    'did.selling_rate_3': '',
    'did.block_expression_3': '',
    'did.send_to_callback_3': '',
    'did.cbr': 'Enables CallBack Pro. Only works if DID destination is a QUEUE.',
    'did.cbr_ua': 'Tries to execute an audio when a call is received.',
    'did.cbr_em': 'Tries to execute an audio before the call is answered. Your DID provider needs to allow early media.',
    'did.TimeOfDay_monFri': 'E.g, your company will only callback to the callee if the call was in between 09-12PM and 02:06PM MON-FRY, between this time interval the workaudio is going to be played and then callback to the callee. You can use multiple time intervals with | separated.',
    'did.TimeOfDay_sat': 'The same but for Sat.',
    'did.TimeOfDay_sun': 'The same but for Sun.',
    'did.workaudio': 'Audio to execute when a call is received at the time interval.',
    'did.noworkaudio': 'Audio to execute when a call is received out of the time interval.',
    //CONFIGURATION
    'configuration.config_value': '',
    'configuration.config_description': '',
    //CAMPAIGN POLL INFO
    'campaignpollinfo.number': '',
    'campaignpollinfo.resposta': '',
    'campaignpollinfo.obs': '',
    //CAMPAIGN POLL
    'campaignpoll.name': '',
    'campaignpoll.repeat': '',
    'campaignpoll.request_authorize': '',
    'campaignpoll.digit_authorize': '',
    'campaignpoll.description': '',
    'campaignpoll.arq_audio': '',
    'campaignpoll.option0': '',
    'campaignpoll.option1': '',
    'campaignpoll.option2': '',
    'campaignpoll.option3': '',
    'campaignpoll.option4': '',
    'campaignpoll.option5': '',
    'campaignpoll.option6': '',
    'campaignpoll.option7': '',
    'campaignpoll.option8': '',
    'campaignpoll.option9': '',
    //CAMPAIGN
    'campaign.id_plan': 'What plan do you want to use to bill this campaign?',
    'campaign.name': '',
    'campaign.status': '',
    'campaign.startingdate': 'The campaign will start from this date.',
    'campaign.expirationdate': 'The campaign will stop in this date',
    'campaign.type': '',
    'campaign.audio': 'Available to massive call. The audio needs to be compatible with Asterisk. The recomended format is GSM or WWAV(8k hz mono).',
    'campaign.audio_2': 'If you use TTS, the name will be executed between Audio and Audio2',
    'campaign.restrict_phone': 'If YES, MagnusBilling will check if the number is in Restricted Phones list before sending a call. If it\'s in, sets the number status to Blocked.',
    'campaign.digit_authorize': 'Do you want to forward the call after the audio?  E.g, if the callee presses 1, he gets sent to SIP Account XXXX. Set Number to Forward = 1, Forward Type = SIP and select the SIP Account to send the callee to. Set -1 to disable.',
    'campaign.id_phonebook': 'Select one or more phonebooks to to be used.',
    'campaign.daily_start_time': '',
    'campaign.daily_stop_time': '',
    'campaign.monday': '',
    'campaign.tuesday': '',
    'campaign.wednesday': '',
    'campaign.thursday': '',
    'campaign.friday': '',
    'campaign.saturday': '',
    'campaign.sunday': '',
    'campaign.frequency': 'How many numbers will be processed per minute?',
    'campaign.nb_callmade': 'Used to control the max completed calls.',
    'campaign.enable_max_call': 'If you enable it, MagnusBilling will check if you have reached the \'Max Complete Call\' amount with duration equals to \'Total Audio Time\'. If true the campaign will be deactivated.',
    'campaign.secondusedreal': 'How many calls you want to send. You need the above parameters active to control it.',
    'campaign.description': 'Text to send to SMS. You can use %name% where you want to show the number name.',
    'campaign.tts_audio': '',
    'campaign.tts_audio2': '',
    'campaign.asr_options': '',
    //CALL SUMMARY CALL SHOP
    'callsummarycallshop.sumsessiontime': '',
    'callsummarycallshop.sumprice': '',
    'callsummarycallshop.sumlucro': '',
    'callsummarycallshop.sumbuycost': '',
    'callsummarycallshop.sumnbcall': '',
    //CALL SUMMARY BY MONTH
    'callsummarybymonth.sumsessiontime': '',
    'callsummarybymonth.sumsessionbill': '',
    'callsummarybymonth.sumbuycost': '',
    'callsummarybymonth.sumlucro': '',
    'callsummarybymonth.sumnbcall': '',
    //CALL SUMMARY
    'callsummary.sumsessiontime': 'Total duration in minutes',
    'callsummary.sumsessionbill': 'Total Sell',
    'callsummary.sumbuycost': 'Total Buy',
    'callsummary.sumlucro': 'Total Markup',
    'callsummary.sumnbcall': '',
    //CALLBACK
    'callback.exten': '',
    'callback.status': '',
    //CALL
    'call.calledstation': '',
    'call.sessiontime': '',
    'call.buycost': '',
    'call.sessionbill': '',
    'call.agent_bill': '',
    //BOLETO
    'boleto.payment': '',
    'boleto.status': '',
    'boleto.vencimento': '',
    'boleto.description': ''
});