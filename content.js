/* ============================================================
   CONTENU ÉDITORIAL — 4 analyses + 1 modèle.
   STATUT « draft » = les cases vides et les « à vérifier » sont
   volontaires : aller chercher ces chiffres est le travail de la
   rédaction, pas un oubli à corriger par une approximation.
   Ne jamais publier une note avec une case vide non marquée.
   ============================================================ */
window.NOTES = [
  {
    id: "eau-prix-du-point",
    pillar: "eau",
    date: "2026-11-22",
    status: "draft",
    read: 5,
    title: {
      fr: "L'eau : qui paie le premier point d'eau, et à quelle distance ?",
      ar: "الماء: من يدفع لأول نقطة ماء، وعلى أي مسافة؟",
      shu: "المية: مين يدفّع أول نقطة مية، وعلى بعد قدّيش؟"
    },
    lede: {
      fr: "Le problème n'est pas « il manque de l'eau au Tchad ». Le problème est que le prix, la distance et la panne ne tombent jamais sur les mêmes personnes. Cette note apprend à compter l'eau comme on compte un budget de ménage.",
      ar: "المشكلة ليست «قلة الماء في التشاد»، بل أن السعر والمسافة والعطل لا تصيب الناس أنفسهم. هذه المذكرة تتعلّم كيف نحسب الماء كما نحسب مصروف البيت.",
      shu: "المشكلة مو «إنو المية ناقصة في التشاد». المشكلة إنو الثمن والمسافة والعطلة ما بتنزل على نفس الناس. الورقة دي بتعلّمنا نحسّب المية زي ما نحسّب مصروف البيت."
    },
    problem: {
      fr: "Dans une même ville, trois régimes coexistent : le raccordement payé au compteur, le branchement informel négocié avec un agent, et l'achat au kiosque ou au carriedresseur. Le troisième est le plus cher au litre et le plus courant chez les ménages les plus pauvres. Avant toute promesse d'« eau pour tous », il faut connaître ce prix réel au litre, quartier par quartier.",
      ar: "في المدينة نفسها ثلاثة أوضاع: توصيل بالعداد، وتوصيل غير رسمي يُتفق مع عامل، وشراء من الموزعين. الثالث أغلى بالليتر وأكثر شيوعًا عند الأفقر. وقبل وعد «ماء للجميع» يجب معرفة هذا السعر الحقيقي لكل ليتر، حيًّا حيًّا."
    },
    numbers: [
      { label: { fr: "Prix du m³ facturé (zone urbaine)", ar: "سعر المتر المكعب المفوتر (حضري)" }, source: { fr: "relevé officiel — à demander/à vérifier", ar: "بيانات رسمية — تُطلب أو تتحقق" }, value: "____" },
      { label: { fr: "Prix du m³ équivalent au kiosque", ar: "سعر المتر المكعب المكافئ عند الموزعين" }, source: { fr: "relevé terrain, 5 points de vente minimum", ar: "رصد ميداني في 5 نقاط بيع على الأقل" }, value: "____" },
      { label: { fr: "Distance moyenne à pied du point d'eau (quartier périphérique)", ar: "متوسط المسافة سيرًا إلى نقطة الماء (الأطراف)" }, source: { fr: "enquête locale / recensement — à vérifier", ar: "مسح محلي/إحصاء — يحتاج تحققًا" }, value: "____" },
      { label: { fr: "Taux de fonctionnement des forages équipés", ar: "نسبة عمل الآبار المجهَّزة" }, source: { fr: "programme eau rural / FAO-FSMS — à vérifier", ar: "برنامج المياه الريفية / الفاو — يحتاج تحققًا" }, value: "____" }
    ],
    options: [
      {
        name: { fr: "Option A — réseaux, le plus lent et le plus juste", ar: "الخيار أ — الشبكات: أبطأ وأعدل" },
        text: { fr: "Extension par quartiers denses, branchements sociaux payables en micro-tranches. Coût par habitant servi élevé, mais le litre devient le moins cher du marché et la panne cesse d'être une arnaque.", ar: "توسعة في الأحياء الكثيفة وتوصيلات اجتماعية تُدفع بأقساط صغيرة. الكلفة للسكان عالية، لكن الليتر يصبح الأرخص ويتوقف العطل عن أن يكون نصبًا." },
        cost: { fr: "Investissement lourd, sur 8-12 ans. Finançable par dette longue si le taux d'abonnement réel est publié.", ar: "استثمار ثقيل على 8–12 سنة،ويموله دَين طويل إذا نُشر معدل الاشتراك الحقيقي." }
      },
      {
        name: { fr: "Option B — points d'eau autonomes, vite et visible", ar: "الخيار ب — نقاط ماء مستقلة: سريع وواضح" },
        text: { fr: "Forages équipés, pompes solaires, comités de gestion. Rapide, bien accepté, mais meurt sans la pièce de rechange et sans le fonds de réparation. C'est là que la plupart des promesses électorales se dissolvent.", ar: "آبار مجهَّزة ومضخات شمسية ولجان تسيير. سريع ومقبول، لكنه يموت بلا قطعة غيار وبلا صندوق صيانة. وهنا تتلاشى أغلب الوعود الانتخابية." },
        cost: { fr: "Faible à l'installation, récurrent à l'entretien : prévoir 5 à 8 % du coût de construction par an, autrement dit un budget que personne n'inscrit jamais.", ar: "رخيص في التركيب، متكرر في الصيانة: 5–8% من كلفة الإنشاء سنويًا، أي ميزانية لا يكتبها أحد." }
      },
      {
        name: { fr: "Option C — réguler l'informel, impopulaire et immédiat", ar: "الخيار ج — تنظيم غير الرسمي: غير محبوب وفوري" },
        text: { fr: "Prix plafond affiché, carte du vendeur, contrôle du transport, responsabilité du fournisseur d'eau brute. Gain pour le ménage pauvre dès le premier mois, mais attaque frontale contre une rente qui emploie des jeunes.", ar: "سعر أعلى معلن، بطاقة بائع، مراقبة النقل، مسؤولية مزوّد الماء الخام. ربح للأسرة الفقيرة من الشهر الأول، لكن ضربة مباشرة لريع يشغّل الشباب." },
        cost: { fr: "Coût administratif faible, coût politique élevé. Nécessite une capacité d'inspection que l'État n'a pas encore.", ar: "كلفة إدارية منخفضة وكلفة سياسية عالية. يحتاج قدرة تفتيش لا تملكها الدولة بعد." }
      }
    ],
    cost: {
      fr: "Aucune de ces trois options n'est « la bonne ». L'arbitrage honnête : B+C dans les deux premières années pour arrêter l'hémorragie du prix payé par les plus pauvres, A en continu sur les quartiers denses. Ce que ça exige : un fonds de réparation alimenté, pas une inauguration de plus.",
      ar: "لا خيار «صحيح» من الثلاثة. الترجيح الصادق: ب+ج في السنتين الأوليين لوقف نزيف السعر الذي يدفعه الأفقر، وأ باستمرار في الأحياء الكثيفة. المطلوب: صندوق صيانة ممول، لا افتتاح جديد."
    },
    winners: {
      fr: "Gagnent : les ménages qui achètent au kiosque (le poste le plus lourd de leur semaine), les femmes et les enfants qui portent l'eau, les petits branchements réguliers. Perdent : les revendeurs sans carte, les agents monnayant les branchements, les fournisseurs de pièces informels. Ces trois catégories sont jeunes, visibles et défendront leur rente.",
      ar: "يربح: الأسر التي تشتري من الموزعين (أثقل بند في أسبوعها)، والنساء والأطفال الحاملون للماء، والاشتراكات الصغيرة المنتظمة. ويخسر: بائعو الماء بلا بطاقة، والعمال الذين يبيعون التوصيلات، وموردو القطع غير الرسميين. وهؤلاء الثلاثة شبابٌ وحاضرون في المشهد، وسيدافعون عن ريعهم."
    },
    decision: {
      fr: "Notre position : publier d'abord le prix réel au litre quartier par quartier — la donnée la plus révolutionnaire du pays n'est pas un slogan, c'est un tableau. Ensuite seulement, proposer un prix plafond et un fonds de réparation chiffrés.",
      ar: "موقفنا: ننشر أولًا السعر الحقيقي لكل ليتر حيًّا حيًّا — فأكثر ما يهزّ البلد ليس شعارًا بل جدولًا. ثم نقترح سقف سعر وصندوق صيانة بالأرقام."
    },
    sources: [
      { label: { fr: "Office national de la statistique (Tchad) — enquêtes ménages", ar: "الجهاز الوطني للإحصاء (التشاد) — مسح الأسر" }, url: "" },
      { label: { fr: "Programme pays / eau potable — indicateurs par région (Banque mondiale, BAD, PNUD)", ar: "برنامج المياه الصالحة — مؤشرات بإقليم (البنك الدولي، البنك الأفريقي، PNUD)" }, url: "" },
      { label: { fr: "Relevé terrain maison : 5 points de vente, 3 quartiers, une même semaine", ar: "رصد محلي: 5 نقاط بيع في 3 أحياء في الأسبوع نفسه" }, url: "" }
    ]
  },

  {
    id: "ecole-langue-metier",
    pillar: "ecole",
    date: "2026-11-22",
    status: "draft",
    read: 6,
    title: {
      fr: "École : quelle langue d'enseignement, pour quel métier, à quel coût ?",
      ar: "المدرسة: أي لغة تعليم، ولأي مهنة، وبأي كلفة؟",
      shu: "المدرسة: أي لسان نعلّم بيه، لأي مهنة، وبكلفة قدّيش؟"
    },
    lede: {
      fr: "Le débat langue arabe / langue française / langues nationales est le plus violent du pays parce qu'il décide qui a accès à l'écrit, donc à l'administration, donc à l'emploi. Cette note le traite comme un problème de coût et de séquence, pas comme une guerre de drapeaux.",
      ar: "جدل العربية والفرنسية واللغات الوطنية أعنف جدل في البلد لأنه يقرر من يدخل إلى الكتابة، ومنها إلى الإدارة فالعمل. هذه المذكرة تعالجه كمسألة كلفة وترتيب، لا كحرب أعلام.",
      shu: "جدل العربية والفرنسية واللسان الوطني أعنف جدل في البلد، لأنه يقرّر مين يدخل في الكتابة، ومن الكتاب يمشي للإدارة فالشغل. الورقة دي بتعالجو كمسألة كلفة وترتيب، مو كحرب أعلام."
    },
    problem: {
      fr: "Un enfant tchadien change souvent de langue d'enseignement en cours de route, parfois deux fois. Résultat : il n'est alphabète pleinement dans aucune langue à la fin du cycle moyen, ce qui bloque la scolarité plus sûrement que l'absence d'école. Le vrai problème n'est donc pas « quelle langue », mais « à partir de quelle langue, et à quelle année ». Une transition bien sequencée coûte ; une succession improvisée coûte deux fois plus et ne forme personne.",
      ar: "الطفل التشادي كثيرًا ما يغيّر لغة التعليم في الطريق، أحيانًا مرتين. النتيجة: لا يكون متقنًا قراءةً ولا كتابةً في أي لغة عند نهاية المتوسط، وهذا يعطّل دراسته أكثر من غياب المدرسة. فالمسألة ليست «أي لغة» بل «من أي لغة، وفي أي سنة». التدرّج المحسوب يكلّف، والارتجال يكلّف مرتين ولا يبني أحدًا."
    },
    numbers: [
      { label: { fr: "Taux d'achèvement du primaire, par langue d'enseignement", ar: "نسبة إتمام الابتدائي بحسب لغة التعليم" }, source: { fr: "ministère — à vérifier, ventilé", ar: "الوزارة — يحتاج تحققًا وتفصيلًا" }, value: "____" },
      { label: { fr: "Nombre d'enseignants formés dans chaque système", ar: "عدد المعلمين المكوَّنين في كل نظام" }, source: { fr: "écoles normales / directions provinciales — à vérifier", ar: "مدارس تكوين/إدارات إقليمية — يحتاج تحققًا" }, value: "____" },
      { label: { fr: "Coût moyen annuel d'un élève (salaire + manuels + bâtiment)", ar: "متوسط الكلفة السنوية للتلميذ (راتب + كتب + مبنى)" }, source: { fr: "à construire soi-même à partir d'un budget-type d'école", ar: "نبنيها بأنفسنا من ميزانية نموذجية لمدرسة" }, value: "____" },
      { label: { fr: "Part des dépenses d'éducation dans le budget de l'État", ar: "حصة التعليم من ميزانية الدولة" }, source: { fr: "loi de finances en vigueur (texte officiel)", ar: "قانون المالية الجاري (نص رسمي)" }, value: "____" }
    ],
    options: [
      {
        name: { fr: "Option A — langue nationale + arabe + français, séquentiel", ar: "الخيار أ — لغة وطنية ثم عربية ثم فرنسية" },
        text: { fr: "Petite enfance dans la langue de la maison, arabe et français introduits comme matières puis comme langues de scolarisation par paliers. Ce qui manque toujours : les manuels et les maîtres, pas la décision politique.", ar: "الطفولة المبكرة بلغة البيت، ثم تُدخل العربية والفرنسية موادًّا ثم لغات تدريس على مراحل. الناقص دائمًا: الكتب والمعلمون، لا القرار السياسي." },
        cost: { fr: "Coût frontal élevé (formation, manuels), puis économies : un enfant qui comprend en six ans coûte moins qu'un enfant qui redouble trois fois.", ar: "كلفة أولية عالية (تكوين وكتب) ثم توفير: طفل يفهم في ست سنوات أرخص من طفل يعيد ثلاث مرات." }
      },
      {
        name: { fr: "Option B — un seul système linguistique, le plus rapide", ar: "الخيار ب — نظام لغوي واحد: الأسرع" },
        text: { fr: "Une langue de scolarisation partout, les autres comme matières. Administrativement simple, politiquement lisible, socialement brutal : il évince les enfants qui ne parlent pas cette langue à la maison et crée un vivier de ressentiment pour vingt ans.", ar: "لغة تدريس واحدة في كل مكان والبقية مواد. سهلة إداريًا وواضحة سياسيًا، وقاسية اجتماعيًا: تُخرج أطفالًا لا يتكلمونها في بيوتهم وتصنع مخزونًا من الحقد لعشرين سنة." },
        cost: { fr: "Le moins cher à écrire, le plus cher à payer en échec scolaire et en tension communautaire.", ar: "أرخص كتابةً، وأغلى ثمنًا في الرسوب والتوتر الأهلي." }
      },
      {
        name: { fr: "Option C — on ne touche pas à la langue, on répare l'école", ar: "الخيار ج — لا نلمس اللغة، نصلح المدرسة" },
        text: { fr: "Priorité aux résultats, aux enseignants présents, aux cantines et aux salles. Argument sérieux : dans les deux systèmes existants, l'échec vient d'abord de l'absentéisme, de la surcharge des classes et de l'absence de matériel.", ar: "الأولوية للنتائج ولحضور المعلمين وللمطاعم والفصول. حجة وجيهة: في النظامين القائمًا يبدأ الفشل من الغياب وكثافة الفصول وغياب الأدوات." },
        cost: { fr: "Évite le débat identitaire, mais ne le supprime pas : il revient dès qu'un enfant échoue au contrôle en français.", ar: "يتجنب جدل الهوية لكنه لا يلغيه: يعود بمجرد رسوب تلميذ في امتحان بالفرنسية." }
      }
    ],
    cost: {
      fr: "Le budget de l'éducation est une ligne de la loi de finances, pas une promesse. Ce que nous demandons avant toute réforme linguistique : que la part du budget, le nombre d'élèves par classe et le taux d'enseignants titulaires soient publiés chaque trimestre, école par école, dans une page que le parent peut lire.",
      ar: "ميزانية التعليم سطر في قانون المالية لا وعد. ما نطلبه قبل أي إصلاح لغوي: أن تُنشر حصة الميزانية وعدد التلاميذ في الفصل ونسبة المعلمين الثابتين كل فصل، مدرسة مدرسة، في صفحة يقرأها ولي الأمر."
    },
    winners: {
      fr: "Gagnent : les familles qui paient déjà le privé parce qu'elles ont les mots ; les enfants ruraux si la séquence est réellement financée. Perdent : les marchands de manuels d'un seul système, les réseaux de recrutement enseignant, et le discours identitaire qui perd son meilleur carburant.",
      ar: "يربح: الأسر التي تدفع للخاص لأنها تملك المفردات؛ والأطفال في الريف إذا مُوِّل التدرّج فعلًا. ويخسر: تجار كتب نظام واحد، وشبكات توظيف المعلمين، وخطاب هوية يفقد أفضل وقوده."
    },
    decision: {
      fr: "Notre position : la langue s'apprend par paliers financés et évalués, pas par décret. Première revendication chiffrée : former et affecter X maîtres dans la langue de la petite enfance par province, et publier le taux de lecture courante en fin de CE2 — parce que c'est la seule mesure qui sépare une réforme d'un slogan.",
      ar: "موقفنا: اللغة تُكتسب بمراحل ممولة ومقيَّمة، لا بمرسوم. أول مطلب رقمي: تكوين X معلم وتوزيعهم بلغة الطفولة المبكرة في كل إقليم، ونشر نسبة القراءة الطليقة في نهاية السنة الرابعة — لأن هذا القياس وحده يفصل الإصلاح عن الشعار."
    },
    sources: [
      { label: { fr: "Loi de finances en vigueur (texte officiel, rubrique éducation)", ar: "قانون المالية الجاري (النص الرسمي — باب التعليم)" }, url: "" },
      { label: { fr: "Statistiques sectorielles éducation (ministère, PNUD, institut de statistique de l'UNESCO)", ar: "إحصاءات قطاع التعليم (الوزارة، PNUD، معهد اليونسكو للإحصاء)" }, url: "" },
      { label: { fr: "Relevé maison : 3 écoles, 1 classe de fin de primaire, test de lecture identique", ar: "رصد محلي: 3 مدارس، فصل نهاية ابتدائي، اختبار قراءة موحّد" }, url: "" }
    ]
  },

  {
    id: "conflit-agricole-eleveur",
    pillar: "concorde",
    date: "2026-11-22",
    status: "draft",
    read: 7,
    title: {
      fr: "Agriculteurs et éleveurs : qui médie, selon quelle règle, payé par qui ?",
      ar: "مزارعون ورعاة: من يتوسط، بأي قاعدة، وعلى من تكاليفه؟",
      shu: "مزارعين ورعاة: مين يصلّح بينهم، بحسب أي قاعدة، ومين يدفّع؟"
    },
    lede: {
      fr: "Le conflit de pâturage n'est pas une guerre d'ethnies : c'est un problème de couloirs, de dates, de dédommagement et de qui juge. Traité comme un problème ethnique, il produit des morts. Traité comme un problème de règles, il produit une politique publique.",
      ar: "نزاع الرعي ليس حرب أعراق: إنه مسألة ممرات ومواعيد وتعويض ومن يقضي. تعاملتَ معه كعرقية أنتج قتلى، وتعاملتَ معه كقواعد أنتج سياسة عامة.",
      shu: "نزاع الرعي مو حرب أعراق: دي مسألة ممرات ومواعيد وتعويض ومين يقضي فيها. لو اخدتو عرقية، يولّد قتلى. ولو اخدتو قواعد، يولّد سياسة عامة."
    },
    problem: {
      fr: "Trois variables décident de tout : l'avancée ou le retard des pluies, l'étendue des surfaces cultivées sur les axes de transhumance, et la crédibilité de celui qui tranche un litige. La règle coutumière existe et est souvent mieux respectée que la règle écrite ; mais quand elle est jugée partialité par la partie adverse, la violence recommence. La vraie question institutionnelle : une instance de médiation dont personne ne peut dire qu'elle appartient à un camp.",
      ar: "ثلاثة متغيرات تحسم كل شيء: تقدّم المطر أو تأخّره، ومساحة المزروع على مسارات التنقّل، ومصداقية من يفصل في النزاع. القاعدة العرفية موجودة وكثيرًا ما تُحترم أكثر من المكتوبة؛ لكن إذا رأى الطرف الآخر أنها منحازة عاد العنف. والسؤال المؤسسي الحقيقي: هيئة وساطة لا يستطيع أحد أن يقول إنها تنتمي إلى فريق."
    },
    numbers: [
      { label: { fr: "Cheptel et itinéraires déclarés par saison", ar: "الثروة الحيوانية والمسارات المعلنة كل موسم" }, source: { fr: "élevage / douane animale — à vérifier", ar: "الثروة الحيوانية — يحتاج تحققًا" }, value: "____" },
      { label: { fr: "Nombre de litiges portés chaque saison devant les autorités locales", ar: "عدد النزاعات المطروحة كل موسم على السلطات المحلية" }, source: { fr: "sous-préfectures / chefferies — relevé terrain", ar: "نواب العمادات/المشايخ — رصد محلي" }, value: "____" },
      { label: { fr: "Valeur moyenne d'une perte (sac de semences / tête de bétail / blessé)", ar: "متوسط قيمة الخسارة (كيس بذر / رأس ماشية / جريح)" }, source: { fr: "marché local, trois places relevées", ar: "سوق محلي، ثلاث ساحات مرصودة" }, value: "____" },
      { label: { fr: "Événements violents liés au foncier rural, par an", ar: "عدد الأحداث العنيفة المرتبطة بالأرض الريفية سنويًا" }, source: { fr: "base d'événements type ACLED / presse locale croisée — à vérifier", ar: "قاعدة أحداث / صحافة محلية متقاطعة — يحتاج تحققًا" }, value: "____" }
    ],
    options: [
      {
        name: { fr: "Option A — couloirs et calendriers négociés", ar: "الخيار أ — ممرات ومواقيت متفق عليها" },
        text: { fr: "Tracer et faire respecter les axes, fixer les dates d'entrée et de sortie, publier la carte avant la saison sèche. Ça ne marche que si la carte est dessinée avec les deux côtés, village par village.", ar: "ترسم المسارات وتُحترم، وتُحدَّد تواريخ الدخول والخروج، وتنشر الخريطة قبل موسم الجفاف. لا تنجح إلا إذا رُسمت الخريطة مع الطرفين قرية قرية." },
        cost: { fr: "Coût faible (arpentage, réunions, panneaux), coût d'exécution élevé : il faut quelqu'un sur place au moment où le troupeau arrive.", ar: "كلفة بسيطة (مسح واجتماعات ولافتات)، وكلفة تنفيذ عالية: يلزم حضور في المكان عند وصول القطيع." }
      },
      {
        name: { fr: "Option B — fonds de compensation automatique", ar: "الخيار ب — صندوق تعويض آلي" },
        text: { fr: "Barème public et rapide : une tête de bétail ou un champ dévasté = une somme connue, payée en 15 jours, sans procès. La lenteur et l'arbitraire de l'indemnisation sont le carburant de la vengeance.", ar: "سلم معلن وسريع: رأس ماشية أو مزرعة مدمَّرة = مبلغ معروف يُدفع في 15 يومًا بلا دعوى. بطء التعويض وتعسّفه هما وقود الانتقام." },
        cost: { fr: "Financement par taxe modeste sur le bétail vendu aux marchés à bestiaux + abondement public. Traçable, donc défendable.", ar: "يُموَّل برسم بسيط على الماشية المباعة في الأسواق + مساهمة عامة. قابل للتتبع، إذن قابل للدفاع عنه." }
      },
      {
        name: { fr: "Option C — justice mixte, écrite et coutumière", ar: "الخيار ج — عدل مختلط: مكتوب وعرفي" },
        text: { fr: "Comités locaux composés à parts égales, décisions publiées, appel possible devant un tribunal. Rien de neuf sur le papier ; la nouveauté obligatoire est la composition paritaire et le procès-verbal affiché.", ar: "لجان محلية بالتناصف، قرارات منشورة، مع إمكانية الطعن أمام محكمة. على الورق ليس جديدًا؛ الجديد الواجب هو التناصف ومحضر معلَن." },
        cost: { fr: "Coût humain et politique : il faut former, payer les séances, et accepter que la première décision impopulaire vienne de ton propre camp.", ar: "كلفة بشرية وسياسية: يجب التكوين ودفع جلسات القبول، وتوقع أن أول قرار غير محبوب سيأتي من صفك." }
      }
    ],
    cost: {
      fr: "A+B sont financables immédiatement (cartographie + barème), C se construit. Ce qui n'est jamais financé, et qui fait tout échouer : la personne qui va sur les lieux le jour même. Un dispositif sans présence est une lettre.",
      ar: "أ+ب قابلان للتمويل فورًا (الخريطة والسلم)، وج يُبنى. ما لا يموَّل أبدًا وهو سبب كل فشل: الشخص الذي يحضر في يوم الحدث. منظومة بلا حضور مجرد رسالة."
    },
    winners: {
      fr: "Gagnent : les agriculteurs les plus exposés sur les axes, les éleveurs qui veulent une date et une route au lieu d'un risque, et les femmes qui aujourd'hui portent l'eau et le deuil. Perdent : les intermédiaires qui vivent de l'ambiguïté foncière, et les politiciens pour qui « ethnique » est un raccourci électoral commode.",
      ar: "يربح: المزارعون الأكثر تعرضًا على المسارات، والرعاة الذين يريدون موعدًا وطريقًا بدل خطر، والنساء اللواتي يحملن اليوم الماء والعزاء. ويخسر: سماسرة الغموض العقاري، والساسة الذين يرون «العرقية» اختصارًا انتخابيًا مريحًا."
    },
    decision: {
      fr: "Notre position : publier la carte des couloirs avec les deux parties, instaurer un barème d'indemnisation payé en quinze jours, et rendre obligatoire le procès-verbal affiché. Trois mesures, aucune phrase.",
      ar: "موقفنا: ننشر خريطة الممرات مع الطرفين، ونقرر سلم تعويض يُدفع في خمسة عشر يومًا، ونجعل المحضر المعلَن إلزاميًا. ثلاث خطوات بلا جُمل."
    },
    sources: [
      { label: { fr: "Textes fonciers et pastoraux en vigueur (à récupérer en version officielle)", ar: "النصوص العقارية والرعوية الجارية (تُؤخذ بصيغتها الرسمية)" }, url: "" },
      { label: { fr: "Relevés d'ONG et de recherche sur la transhumance au Sahel", ar: "دراسات ومنظمات حول التنقل الرعوي في الساحل" }, url: "" },
      { label: { fr: "Base d'événements violents (ACLED) — à recouper avec la presse locale", ar: "قاعدة الأحداث العنيفة (ACLED) — تُقابل مع الصحافة المحلية" }, url: "" }
    ]
  },

  {
    id: "cout-carburant-et-vie",
    pillar: "energie",
    date: "2026-11-22",
    status: "draft",
    read: 5,
    title: {
      fr: "Le coût de la vie commence à la pompe : ce qu'un prix du carburant change vraiment",
      ar: "غلاء المعيشة يبدأ من المضخة: ما يغيّره سعر الوقود فعلًا",
      shu: "غلاء العيش يبتدي من المضخة: شنو سعر الوقود يغيّرو بصحيح"
    },
    lede: {
      fr: "Au Tchad comme chez ses voisins sans littoral, le prix du litre décide du prix du taxi, du transport de l'eau, du marché et du cercueil. Cette note sert à ne jamais dire « le carburant est cher » sans dire : par rapport à quel revenu, et avec quel effet sur quel panier.",
      ar: "في التشاد، كما في بقية الدول المجاورة التي لا منفذ لها على البحر، سعر الليتر يحسم سعر سيارة الأجرة ونقل الماء وثمن السوق حتى الكفن. هذه المذكرة حتى لا نقول «الوقود غالي» دون أن نقول: مقابل أي دخل، وبأي أثر على السلة.",
      shu: "في التشاد، زي ما في الدول الجيران اللي ما عندها بحر، سعر الليتر هو اللي يحدّد ثمن الركشة ونقل المية وثمن السوق وحتى الكفن. الورقة دي عشان ما نقول «الوقود غالي» بلا ما نقول: مقابل أي دخل، وعلى شنو يؤثر في القفة."
    },
    problem: {
      fr: "Le débat sur le prix à la pompe est capturé par deux phrases fausses : « il faut baisser le prix » (sans dire qui paie la différence) et « c'est le marché » (sans dire que le marché intérieur est approvisionné par un nombre très limité d'opérateurs). Le vrai sujet est triple : le coût logistique d'amener le carburant jusqu'à N'Djamena et plus loin, la structure du réseau de distribution, et l'absence de tout amortisseur pour les ménages qui dépensent une part énorme de leur jour dans le transport.",
      ar: "جدل السعر عند المضخة تحتكره جملتان خاطئتان: «ننزل السعر» (ومن يدفع الفرق؟) و«هذا السوق» (وسوقنا داخلي يمدّه عدد محدود جدًا من التجار). المسألة ثلاثة: كلفة إيصال الوقود إلى نجامينا وما بعدها، وهيكل شبكة التوزيع، وغياب أي واقٍ للأسر التي تنفق جزءًا كبيرًا من يومها في النقل."
    },
    numbers: [
      { label: { fr: "Prix à la pompe, trois stations, un même jour", ar: "السعر عند المضخة، ثلاث محطات، يوم واحد" }, source: { fr: "relevé maison, photos horodatées", ar: "رصد محلي بصور مؤرخة" }, value: "____" },
      { label: { fr: "Part du transport dans la dépense d'un ménage urbain modeste", ar: "حصة النقل في إنفاق أسرة حضارية متوسطة" }, source: { fr: "à estimer par enquête de rue (30 ménages)", ar: "نقدرها بمسح شارع (30 أسرة)" }, value: "____" },
      { label: { fr: "Course de taxi la plus fréquente : prix et distance", ar: "أكثر رحلة أجرة تكرارًا: السعر والمسافة" }, source: { fr: "relevé maison, 20 courses", ar: "رصد محلي، 20 رحلة" }, value: "____" },
      { label: { fr: "Écart de prix entre N'Djamena et deux provinces", ar: "فرق السعر بين نجامينا وإقليمين" }, source: { fr: "relevé maison, même jour", ar: "رصد محلي في اليوم نفسه" }, value: "____" }
    ],
    options: [
      {
        name: { fr: "Option A — transparence des prix, coût quasi nul", ar: "الخيار أ — شفافية الأسعار: كلفة شبه صفر" },
        text: { fr: "Publication hebdomadaire du prix relevé station par station, rendue publique. Un tableau fait baisser la fourchette plus vite qu'un discours : l'asymétrie d'information est le premier profit du vendeur.", ar: "نشر أسبوعي للسعر المرصود محطة محطة. جدول واحد يخفّض الفارق أسرع من خطاب: فجوة المعلومات هي أول ربح البائع." },
        cost: { fr: "Une personne, un téléphone, une feuille. À faire cette semaine.", ar: "شخص وهاتف وورقة. نفعلها هذا الأسبوع." }
      },
      {
        name: { fr: "Option B — amortisseur ciblé (transport, pas essence)", ar: "الخيار ب — واق موجه (النقل لا البنزين)" },
        text: { fr: "Aide au transport scolaire et au petit commerce plutôt qu'une subvention générale du litre, qui profite d'abord à ceux qui ont un véhicule. C'est plus difficile à expliquer, mais c'est ce qui protège le panier du ménage pauvre.", ar: "دعم نقل التلاميذ والتجار الصغار بدل دعم عام لليتر يستفيد منه أولًا من يملك سيارة. أصعب في الشرح، لكنه ما يحمي سلة الأسرة الفقيرة." },
        cost: { fr: "Coût budgétaire réel, mais divisé par rapport à une subvention généralisée ; exige un registre des bénéficiaires auditable.", ar: "كلفة ميزانية حقيقية لكنها أقل بكثير من الدعم الشامل، وتتطلب سجل مستفيدين قابلًا للتدقيق." }
      },
      {
        name: { fr: "Option C — frapper la rente de distribution", ar: "الخيار ج — ضرب ريع التوزيع" },
        text: { fr: "Ouvrir réellement le réseau (stockage, concurrence, contrôle des marges). Long, juridiquement dense, et frontalement hostile aux intérêts en place. À dire, mais à chiffrer avant de promettre.", ar: "فتح الشبكة فعلًا (تخزين وتنافس ومراقبة الهوامش). طويل وكثيف قانونيًا ومعادي مباشر للمصالح القائمة. يجب قوله، لكنه يُحسب قبل أن يُوعَد." },
        cost: { fr: "Coût politique maximal, effet structurel maximal.", ar: "كلفة سياسية قصوى وأثر بنيوي أقصى." }
      }
    ],
    cost: {
      fr: "Ordre réaliste : A cette semaine, B dans le prochain budget, C dans un mandat. Une campagne qui promet les trois sans ordre de priorité ne promet rien.",
      ar: "الترتيب الواقعي: أ هذا الأسبوع، ب في الميزانية القادمة، ج في دورة كاملة. من يعد الثلاثة بلا ترتيب فهو لم يعد بشيء."
    },
    winners: {
      fr: "Gagnent : les usagers quotidiens du transport, les marchandes dont le coût du transport entre dans le prix de vente. Perdent : la marge de l'informel et les positions de rente sur le stockage et le transport.",
      ar: "يربح: مستعملو النقل اليومي والتاجرات اللواتي يدخل نقل البضاعة في سعر بيعهن. ويخسر: هامش السوق غير الرسمي ومواضع الريع في التخزين والنقل."
    },
    decision: {
      fr: "Notre position : commencer par le relevé public hebdomadaire. C'est un geste minuscule et c'est le plus politique de tous : il transforme un ressenti diffus en une donnée que chacun peut vérifier — et une donnée vérifiable ne peut plus être niée.",
      ar: "موقفنا: نبدأ بالرصد العلني الأسبوعي. خطوة صغيرة وهي الأكثر سياسة: تحوّل الانطباع المبهم إلى رقم يستطيع كل واحد أن يتحقق منه — والرقم المتحقق منه لا يُنكر."
    },
    sources: [
      { label: { fr: "Relevés maison horodatés (3 stations × 3 villes)", ar: "أرصاد محلية مؤرخة (3 محطات × 3 مدن)" }, url: "" },
      { label: { fr: "Données de prix régionaux (observatoires régionaux, institutions internationales)", ar: "بيانات أسعار إقليمية (مرصد إقليم/هيئات دولية)" }, url: "" }
    ]
  }
];

/* ---- Modèle vierge : la structure obligatoire de toute note ---- */
window.NOTE_TEMPLATE = {
  title: "Titre : le problème, pas le sentiment",
  sections: [
    "1. Le problème — 5 à 8 phrases, avec les 3 variables qui décident du résultat",
    "2. Les chiffres — 3 à 5 lignes : valeur, source, date, qui peut vérifier",
    "3. Trois options — chacune : ce qu'elle change, ce qu'elle coûte, ce qu'elle risque",
    "4. Coût & financement — la recette qui paie, sinon écrire : nous ne savons pas encore",
    "5. Qui perd, qui gagne — les intérêts, jamais les personnes",
    "6. Notre arbitrage — une décision datée, pas un souhait",
    "7. Sources à consulter"
  ],
  regles: [
    "Aucun chiffre sans source ou sans mention « à vérifier ».",
    "Aucune personne nommée dans une critique.",
    "Aucune promesse sans ordre de priorité.",
    "Résumé d'une minute en darija obligatoire avant publication."
  ]
};
