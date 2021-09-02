(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('湖北', {"type":"FeatureCollection","features":[{"id":"420100","geometry":{"type":"MultiPolygon","coordinates":[["@@AAADA@@BBBA@C@GDAAAD@DCDBFBAHBBJDAFCJDDABBAADGCC@CBEDCAACBA@CACC","@@@CAA@DBB","@@GBGLM@EAGFIFA@AFM@AHDDADIBIBCAKA@ABCCAADMJSBGFBDABMFUBE@[LEF[NUFQB]FUJE@CEG@KGYDCCIIGGMEUCOKMuGIDkL@NDPCRGJSRCJANDX@NCPCNGDmFCDAHC\\EHQFHVATAHCFEFEJADEBW\\Q\\CF@HELSPGBQ@_JaEC@E@GEACEECAKACDCVBDDBJAFHBJGBQJOf[p[XqbOB]@qMc]QY]oi{GS@KFGcMC@CFCBYII@KEADBPALCFELEBMCG@]N_LGFCJADGFEHBHNPBD^HDDBPBJHTHJBJAFCBQEKAODEFCT@FDB@DGPAL@DHF@DEFGDEFIDEHIVBBHJAJNRDH@DCBWBAECAODM@YFEDAD@DJL@FEDIBBFHDTRDR@HHDjDN@D@HHRFJBJ@DHDPFNRLJNNNBHRVRRR@DBDRFPDHVNHNJFJEBIHMJ@RLBDEXD\\RdHDHID@BB@HTCVDLH\\\\DJIJ@FFPABEHULBHTJFFBFCDCBWFAD@FBFFFXRRZTX[FOVMCGEC@MNCPFJADE@GIIAQ@CB@DBJAFHD@BIH@DFBLABEBCDCNBDD@BEFELDNJTBFAFC@QAADBNDBHBHHDCDIJCDDFJLFFHDDL@HFN@PEFFHABDHEFD`NJ@HAF@\\KD@DHHBFB´GFAF@bK@C@ALIDBFHD@XE^@b[BBBFFBF@JCB@DZAHGRE^FbHJQVCjCXAF@HAHBDKHEN@BH@@DFFID@FFDCH@DCBHD@DADBDCJCDFHADBFCBBFEA@B@DFDBLCDEDBDBLDBB@F@BFHDDLDBD@AFFBBHEBCDHDBDEB@BHFADC@CB@JMRAHHJCHADEDKBAPHLLHBFCH@FPAF@DNJADB@J@BLH@FCB@BDJCHIFEJFHBJ@JEFBDEH@HFFRHbXFFVTBFBJLHDLVRJVADGF@NCFQREBMGC@CDC@IEABBLADIHCFCFODEHObERAN@LDHBBNBJAH@DB@FIPFFCNJLDNDDH@HALBT^HFJBBDATDLJDPDDBDDVHLLLFHDHCVSBE@GBGDCNBHCLSHCJ@JMB@LFRFRBDA@IFCFBBIDATDlCHFLBRE`@JCFCAC@IAAIEEG@KMMQeEGKGGIFYBE@GNIHKHEFGLCBABCHCPDFAHCHA@CGGBAZEREDC@CCEEAK@G@AC@IBCBGBCF@HDF@JKVIDCJQRCPAPAHE@GBCFA@MDKNK@AKO@EBGHG@EKQGKESEGCCEQDGUKAIEC@IHMJKBE@GDAZAHAXUFG@E@AFBBFD@DBB@DA@GLQb[LElKJcLIAQDEV@RHPDJL@FBBDABIFGFAPLP@BB@JHDDBFDVADFDBBACIBELEJ@FB@FKDAFEDADFDBFEFFNADCDBFPDDF@DB@FEJDT@HFJB@FFFLHJBJ@D@DGCEDABAJBDAAEE@CA@EDIBAAEEEFMD@HHFRFJBRDBVTHB@BF@@BBGECAEEADCB@PLD@DA@I@CFIAOECAEBANC@ED@DKBAHADBD@AEBC@EL@BDRADIfBHFJVLFBHGLEDBHADKFQBEHDHPAHBFJRLJHRDLCPA`TDEL_FCBD@FHFDCBEDA@CBABDBADB@DN@HFAGAC@EAABEFAHAHBHHAFRDAEBCJAFD@FFDFCAABGCCDCBCCCCAIACE@IJCFEFDF@DGC@GCCC@CECFOCC@CFALQJEDEJCBCF@LBLAB@BFDBB@NEEKIG@AHGJEHCHHFABCL@LG@CCCG@@ADCBCDAPAH@NCDABODCAEEEEAKCOGGCCEG@@GHC@CGEIBGCGII@GBCDHJGFGAOFKABICCEDEHC@E@MMDCCG@CPQDGEGIAGGAIBMAAICAF@LE@AAAICEKAAJC@EEKECAKAIC@GFCFALK@C@KEIECCDGLMJEHEDEBKCMOE@[HABALABIAIDKBKC@IBOAYCKGGCCKCeaKESCWGMIONIAACCG@CGI@AHSLMBEHKJIDE@EIECK@CFG@CFIHAFFJFBHBBJCTSFMJK@KF@FFFCFIAC@AE@A@GIuEkGQEECM@qOOI[UgQuOuI]IkUQBFQ@GBELGACAAG@AGBCB@HDFGF_BIGG@EHMAOHIBEACIIQ@CECOBGDEAAI@IDADKBGBIAE@ABI@CE@C@CFC@GIEEG@EHIFIBGAQFCASACAQ@MAQEK@KFOHIHEDOKsDcAIGMYQG@GECO@UIKe[AOBQG_KOGEE@MBACAKBQCCIC@GDCBGEKMM@CDC@MEECEDSPOLMBCAIFEH@PIBK@CDILGFE@EEGHIAI@GDKLSLCDGJEAAACE@UJCEDE@CCEI@ADIHA@AAAGJECE@CLKDEACI@EQCC@AD@FCAEIEHABEDABEGIGC","@@@BJFA@@DJNETGJFHHDFAJO@GCEAQBIB@FBBCECGHCB@CABAE"]],"encodeOffsets":[[[117698,31765],[116492,31026],[117282,30689],[117729,31738]]]},"properties":{"cp":[114.298572,30.584355],"name":"武汉市","childNum":4}},{"id":"420200","geometry":{"type":"Polygon","coordinates":["@@RELMPGBCGCCAACDGDCF@LFJABJHDBD@DDBF@FAD@NDdHFCHKJCBADA@AE@DAAABCFB@A@QCCFI@GDCVHHBNGJJHDVAD@DNDL@DIHADBDFFFBLDDEFMPALDHLRJFNCDIFKZ@FNNLHF@LGD@@DADKNCHEF@RCNCFSHCTWLGH@DFRDDFDRB@BGJ@DBDRHBBBFKHIDUBCFIJSJKJGPIHKFAF@NBNAFEPAHDJLBFD@LFHfRDDBFEFEHADFJ@FFLHLHHJLVNFBJABSDEHC@AAIBAFEHAP@DAFEH@RGRCT@FDEP@HHJ\\BNDl@POAS@EBCLILELALBDAHEDGFCAIQKAC@AJM@KBEJIHCZCNGdIPEZEFCHIJ@DALMDAJ@HBDDDJHBDFL@HFD@H@B@DCJGB@DFBHFBJDF@ALID@BJDDDBDLBDNFFDJDDL@RA@HD@RGH@BB@DBFFDL@XCAGD_HMVUdQ\\ElCRBVNPFHBJA`ITANUle{bwFODUBQA_BILYVS\\QPM\\oT]XQNEJEDI@GGY@KDMNMXKNMFELaLOXSPIhSpII_DGEDcIGCIIEGCW@SGMEQAGHSD[CEEEOKm]caMUGGQIGKI@KGME_[BEGIIHGACDCAAACAIBSEGCIMGACAG@KD@EEAACECAEE@GEGIA@ADEDI@EBGHEJALHP@RAHEBQBMAkK]HYAYBQEG@EDID[@QFEFIJCJGJSNK@KEEGCKBIDIJING^@NEBE@EAKEEGAEIBKAE@EHEACGEEI@CFEUG@A@A\\KPJP@ZHNCBCDE@EC@ECEBAAKEAEBGGC@EFGBGI]@kJS@IGGUAO@EBEAI@IHePMACAC@EDAJJJBLLB@FCFFJ@DEHQLEACCCAG@IDCAAA@AOAGEM@ABE@CGIDIGEDCFEBEFI@GJCJOBCDCHC@AA@GEEKCI@GDA@GGAIIE[BYFEHIDCDFf_FW@EBAF@HDHAFKLGJEDADAPHfADIJILCNA\\U`CJ]FSBAFBJ@DGP@H@HKRGDWBMFSAQ@EBC@@EK@EFQBK@EFMDIAKEc\\GJAJLRBJBVLRALCHAFDP@fABeBCBABBTJVAHFX@FBHDFBRIAODKEC@kNGFI@IBENcBZEBABDF@LEFMDGBSEaEIDAFBHEDEB_MA@CBDJDFFBPBDB@B@BKRUBEBCFBDD@NLAHCBAFGBJFBFEDC@@BDDFRJ@BDCFKL@DDFID@FBFD@JGBCD@H@BF@DCFDFVIF@DDABGFCHIBMVCL@HBJADDC"],"encodeOffsets":[[117300,30783]]},"properties":{"cp":[115.077048,30.220074],"name":"黄石市","childNum":1}},{"id":"420300","geometry":{"type":"MultiPolygon","coordinates":[["@@JCJODSYYWPDF@BDF@DCB","@@NUGGIA[AOACEHKUOKAGBAABEEKEAI@CAE@CBAD@BHBBBALFNRHDH@L@DV^D@RUFAF@HDJPJ@","@@FAPMDMJEACCAKBA@DMDOHKBECCGAGc[J@NFDBHCFA@CCG@","@@U]EBECAEEACEMIACJAHBBDH@DDDBXOOSFGJBTTNNXLNDP@LCHERYJELAHCBERJ@EEE@AFG@OTOVMNEH@FEF@VKBEEK@KPOLMFOAMUIYCWMMIEG@MJEPDbLL@ERAJEFEBIEKDMNGXSTeJ_KQKGQGOWCMAMN_BQEKCOBGFGL@TPJNFFFDHBLGJQAQDMCWBEFCLEF@\\KJIVIxGPEPGLCJMFSJOFSDAHMHG@ECGNM@EFQNEFEDAHDRCLBHH@BAFBDJBHAHBDDBBCF@HBDD@DCHIJKBECEIEAIBK@EKMEIAAEBIFEDGHABG@@EBCFEBCC@AAKJCFIDE@AC@AVOJCZAPBFABGDAJBBCAIGC@CRKBIDCNETORGLGDCJURSCMDMFWLMpi\\MJALFDI@G@SEKGMIMccBK]gE_MQMNMIGACBAA@CIAACCIIME@EDGBOOO@AA@EHCFCBKHK@AWWMKKGgEKEUQMES@CHUPMJKBGEACHGKUIGOEOIUIOAMCGGQSCQIQKGOEiESGWMSQQMEWEE@ABEJEBCEGEEKG[U@EDCJANIF@JHPC@CEKAK@SBGDENCDAHMFGDIE]KWUcKWOMIOSOs][MWEOJK@OGGKIKIDC@AAGMUEKIIIGCCFMFCLA@CAEICCIAGGKYCM@EVJLBL@FADECOGSKCAWAC@CLGJBBACOAAI@AE@ECEKDCAIIAKBGEEJA@ACC@ANIBB@FHDBJHHD@FCH@DEHO@CGAAKBEBCLEF@HEFQFE@EKGEAC@CDIHELUVIAEIAACXCJMNADCJAVAHEJIHIBKAWBYIA@@IDG@AAAI@ECEIAEJEWO@IDAABERIDIDCAEDGH@@N\\ICGFCJA@AHKOKIKC@AADC@IDEB@DDLCBGFEAiJKHGBCAOAAI@ECBCFA@A@AKGOCIEA@ILALDLEHNFDJ@NGJCBEAGIMGMOIAGNMFEFCH@NABMBIJCBC@MGUGG@CA@EDE@GSFQJEFGLI@QAECCCNKBA@CAAG@KLCAAC@CDEHG@CCAOASCM@GHOAIFKAQFQGQTEDM@MA@A@EDEDQEGCAS@KEAC@A@EFCGIEBCBGPEFUDc@KDQDIDEHO@OD]NKEAECQCCEAM@ULEAOEKHG@OIEAGBKHG@OGG@IFQAG@SFW@MBCACKACYEEDABHN@LABI@GD_GICKGACBCLGBECA_M@ABQAGAAOAYMC@IHWD@B@HGHS@GAK@GCGQIGMEYDGAECAC@cDQ@AKGcKaBcCSDg@IEMMIEcIQIGGEGBSAMQkAKM[NARMFEDIAWACGGcMIKEIAGBCLAFEH@JEFC@CHEFKAEBC@GSECCAA@UCECCEBWRUDQVEPIFMD]AYBW@GCIG[MQIIOSMOGIAKEBMHOGIKAWKIGCGaSE@SHO@SEMKKE@BEBEAQIQ@QCI@CFIFINGBIBsCG@IDMLIDQBEDEFCNCDURUFO@QAkYG@IPEB[CSBKCGBOAOAI@MDQN@DLNDNRJXF@DEHB\\HDNBPDBBCFKDGFEHOTIFFN@VALFNCJQTAXEFLR@BADCB[AEDIAADADCDSBAB@DCNODCBOEWAIBQHI@IEG@MCMIK@UFIJIDGFMFPVVJDBADEFKBGFDVG^@HDNJNJJFHTDJBRALCDFDHI\\[zENCRMZGHGFIBOFCH@JJTHZlHJBPTDLBN@XELEJGHQZWPS^GZBVFXR`^dFJDVFNAHW^MFILKREVCXFZ\\t@LMNINeLKCKAWFCTEHM^SbSTQLOHILCJFNXdFP@TCRKVGTANDVHLJH^BHLExHJVLLVB^JPZHHHLN@^FHRL~RXNPTGV[`G\\HXJHNFÈHXHLBLAL@TOfSrGnM^CDZbBZA\\GjWT@NHTEbkPKVEX@TBpVVNNLLJTHHJBNAPGJBPJHXDX@VCRI\\[NIXBLHJTRT`NHFDLEF_TKRERKHQTOLCNBPNf@LDR@hGXAJEDG@MGM@QNELBJFLPTFJCFBFWCKDGHGTKNIFiVOFsL]RGPADADG@WCUFMHINCDC@_CcF]CKBGAGDKREFIFKDY@MCG@YRCDKBIACCKYEI[AMAUIQMECK@SJKPEFOVGFIFF^LX@bDPTtF^BjDdJhAREFI@eJMJSHI@ULSHULUFSXMFkCSFo@MCYMWAIFCNEDKCIECGEAKHKRIF]FoTODW@KByAcLGFIBED^\\VPPPJTJTLHVFNTDZNPXHXDXAPCVGXIPC\\FLFAlBNDFJFFHFBbBXODM@SFEN@RJPFbCRYbO^E~JpCXB^DTNBXEVKQZIJI`MTIRGLARDbNNALEHGDIZOTAXFXJ\\FtFXA`CZJlFTMJI@CLKECB@@EFCDFDABADBLELEJMRQJERCfD\\LlJVAVCFCdGLEHBBBADE@HFD@BBABE@ADFAABF@@DPAJDFDJNJBFABHBBDE@AFDBA@CEABA@AGBDGF@HDTAACDBBCBDBCDFBEBFDAH@fKJ@RJ^HPEDCJADAHABDCBD@AFBDA@@BC@ABFB@FHFDABHFBBABDALFA@ADBADFAADDABDD@NVJHJJNDNHJFDVALJLNFpAPALEHMFW@MLUHMB]BS@OCMBKLONIRGNCRDZRLFNGJQFOLS^_b]RARF@JCL@NHRLRdZPFZFbARAHAHDHJLJD@@ABIDEHADBFFDHGNAHENH^TVPDHALFRAFDHLDB`C`MLAVDTPHFLFRBTCX_RGLCDCDKHINCJIDITG"]],"encodeOffsets":[[[113712,34000],[113812,32816],[113664,32754],[113712,34000]]]},"properties":{"cp":[110.787916,32.646907],"name":"十堰市","childNum":4}},{"id":"420500","geometry":{"type":"MultiPolygon","coordinates":[["@@AGABAACGIIEKDCDAFBRLJF@BMEI@AHAJ@NGD@FBBBBLJRRNFDNAHENAHFRHJNDDFDFADAHOD@DBFHJEPKH@FBDFFLHRLLTBRCNElKPMHSCQEKOGACBGHG@CAG@IJQFEDAJALBXAD@NIN@BA@ECG@CBEDEFALKvQZBZVTDJANFF@JFFHD@HEFAP@LADECM@IBIFSAMAOJOPE^ECTCdAdPfTRDLFHHpX^`LJDJJNH@z_TCZ@dJpDPFZLNC@CGSDIJEDIIMECCE@ADEB@RAFA@EGAAACICEOIAC@IZaFCNAHDDAHSJIDBJNF@JIN[HADCXCLGZ[FAHCL@NGDDADBFF@DABSDCJ@HC@EEE@EBANBJADEMW@C@ALIBABGCGDKPHLJBDDPFBDCDICKGKDEDAFAHHJLDBDADIFCJBFABECK@GCUEKAGDCLBDADEJWP@TMBC@CCCICCKECCCMAOUIUEECAKDKJGDCAACACJKPaBGDAXAD@LLJDL@T@JAFIBEAGIQ@AHGJE@KDI\\CCIFGLAB@@AFB@CBB@CFB@CEABC@CBCL@@IHGN@D@AGGCCGKcDYHIBG@CCI@CFGFAD@CL@FJDJCDA@ECGACFUCQBIEiCEG@AKE@CCVYPWPQFCDABI@CDGCCE@DCDA@CBACKBA@CD@FICAG@CCBAAA@CFCACDAAI@ECSBADBBAFGF@NCDCAGDE@EDCAEDG@CCMKGCIE@@CDGFCX_EEC@CAEKCC@CDAF@F@BDTE@IHABCDKACC@@AAC@GCECAG@G@AEEEIBABDDABSGABBFADC@CAEIK@IGYG@ADC@CEECUIIBEACCAIAACIGCCWKAADEDKACEMIGKEAAFCL@HGNBDAFEHOAMgwCUEOCCS@FO@GAAECOCIAIGGBALERE@AGEGG@CHKCAE@EDCFABGEAEBAJIPMFAJBTITAD@BDMFADFBPGDBEFABF@NERQHOFODYAMCO@KB_CM@CLMJQRWNMVUfWJEPAHE@GAMCCGAACDMUCe@KBSFMHqrQTUjOVOJMDKK@CCACGCO@KM_EiAICKGCIAkJYHI@kGC@EJBPEJE@C@EEEAEHIP[`GLERIfCHORIFGBIBU@SCYIQIke[OaQkQOGOOO]SWAGKScYKAI@@GFUDEF@DBD@FAFGF@BHAFBBLCLGBEGE@GIOMGBUEI@GEEKAC@BKE[BADAFCBKOIEIBKBQCI@O@CGCKAKG_W_MWTGFGBG@gS[DYRGBcCEBIHGDGASBGJED_@IIMYECKCKGSOiKGEGME_GQGCMCw@kEK@IAEEABeAUDKAO@eHA@AGA@]FQAkFSAaFeDS@MCKBB_HQBC@CHIB_AIBM@OF]COBIFKAIJ@FENFbCNBTADY@YEG@GDCBcBOHG@ABGLED[G]HQ@AAAGQM]JeBMCaKAENIBGIQ@GFEJEAMAWDM@EOQMGEAEAIDKAYOE@GDWNMPGFADFDBFABEFOBSJIDCJCBIBWIOIIGOCIEYIG@MDaFEAEGE@EFE@OCgLMCG@AGECQEEBEFABG@AAFG@CGOBGHK@CACIEEGIEKCCEECSG[UUWWkEEGCKAUB_CQ@WHSCKCSSIESD_LOHGHAHV`@HENGLAH@FDJDFPP@bBHLNBFCHCXHL`TFFBHAHCHKBaNBDFFh\\LPAFEFOJ[L[HCBCFAD@RANeNIDGHAFDNHFJDNBPDBBBDITCBIDMJIBIAKBGBGHIRLH^Jn@JBXHRDjKLABDBZDJHVXjHTAHINQNIJEJDDP@LF[V@ZDNHLJRLLLHFH@D@HOFEH@RDFJFBB@LCR@FHJ@BEJM^@HDDHDRIJ@LHTHHBDBB@ADON@DB@VMHDV@HFRDBDAFFHBLBH@FBBJHBF@DJBLAHDPf@FEH@DBBLFHBLABBERABKEYB@B@FJHBNCFAJERIHOJGBGACBCDGLGFAF@BBDTJFJ@DDL@X\\BNC@FGNCPM@GF@PFD@FBfDFFBHRIPBTM@CDGLOLGXE`KNKFUBW@]AS[QIKKWGSAOBKBEDILH^FNHJLLHPBHGFEHBDALDBFDCF\\DNFNVFDRBPRHDHLPNNHRFPID@PFPHHHBFEF@JMPCRCDI@ABBBDFDNDJBLDJDJHJBHAHJ\\B\\EbBL@fFNH@hFPFALUvCTDFZFhBRLJLBHHNFDJDFFPLFHBNEF_LKHCDBFCJIJMDADAV@DFLADCBMBOBO@BHGJFFANNAFBDBDJ@DELAHAH@LFHPJHJNH@BCDIDQCKFQEABEFMLC@OCEBAF@FAFIFKFIN@DHDBDEL@PONAFJHTDHJDNZ@NAPHNJDHFXHHAPBJHFFBBCJEFGHCFI@ECC@CCC@AJMJAHGBGAGBEFCLAFGDCJ@HHHBPBRFNJBDAHFPELKNCHBJBFJDFHJN@JCP@LBDRP@F@H@DLNDHDRPRBFARLLDF@JCL@JBBDDH@PCLGN@J@TFbAP@RHDADAJKJAN@BBBJZhLJHLBJAJAHDHNHHHTANJRAXPRHN@RSLEBGLBNJDAFE@_BCJELIN[DAH@PLNLPFLHDDDNFDFBV@HDFDBLFRBHBBPFPJVDHDDFHAP@VFLB\\GNDJBDAHGp@RDJADKBSACQKCEFENKPEDCBWFGDABC@CSMGGKOCG@YCKBIBEJONK","@@ZGHBJFD@FCJILGFKAANKLEB","@@BADIDCDOSFFNABCD","@@@FB@NADAFM@IACA@CBINEDAB"]],"encodeOffsets":[[[113718,32197],[113718,32197],[114763,31437],[114267,30891]]]},"properties":{"cp":[111.290843,30.702636],"name":"宜昌市","childNum":4}},{"id":"420600","geometry":{"type":"MultiPolygon","coordinates":[["@@FHTHJBDQ@CCBBB@BED@DA@OCBC","@@GBE@IOGCE@EBQVC@U]@C@KCGQGCGQHDLABIAKH@DBDBXLDHTDPCFEBK@KAQIC@@FDNLZHHJBDDFJFBDKNEDEHDJJLJVFHNBBD@JCBEAKHWAGFIHGDEACKCBGAGPKDI","@@@MG@CHBFCDCJQJAFD@DAH@R@B@DDB@DC@EACEC@I","@@@AIEQKEACBCDFLJJBFDDHCLK","@@ZHF@DBXDVIRCD@DA@EDIHELCDCPCBAFMDCL@LGBCLADAJCNGFGLEDG^MHDLMHABBARDLBFPPZDLNDPDBPDVCRCBDDLPC^KDEDGFC`KRILAB@@BGHCJ@FBD\\VVDFHFLJBPKFAF@DFRFJ@RFD@RKPNJPBHEHBDFDHARKHDDCNEDEDAtEX@RITC^WNCjBHAFABC@EBAJCNAPGZ@FJPBBCDAJ@DBDAAGBALCNILAJAH@JDJHAFHNJAHHhXbJ^Ht^TDLADGA[DITD\\ZRDEN@LET[NCVFHLARCZLVLLXBHBNFDFFBFAJEXAFELMFKhUF@LFVDT@HMFWHICGKMC@uJYEQKFaHKXMXSBOEQ[aOO_IW@QAGEEKHWJUDQByAOGOGQCUAmHMh_BU_iSSY]a[IMBaBWAqBG@_LCL@\\C^MDGBIAGECOACDI@EBCCCIAKAAIFCCEsGOKOOECBWCGICEBQJUDIDIHEDGFOIMOMECIBOFGJCDEBSBMIKOMMSMAKGIGIECKAKLGDMDUEGE_wISIOICSAS@IAGEEECKIEGBWN[FI@CCCC@IH]@KEM]UCKAI@WCQBIDGD]COCGDSDIHG^M@IEMAUE[BOGOCC_BSAMEGGAEAEDKFCHKP_JIBGAWGMAMGIC@GBOJ[Z[HKB_RMAKIE@G@GFqvOZ]PIDUPODW@gIYFE@ICYQGKSSYCiQIGOQKGKEICI@qJGDSJUFIBUEIAe\\MDS@SFILMJOHMG_CYGGEOQM@eNEAEECGIMEGCSF[CkGBIJUHS@UGIGEIIGYA]FEAIGSGG@EDMAK@ACBC@AEEDICGGABCIKAAEBGHIHEFCBIBI@IQCAIBGDCFSPMFC@MAQOG@KFIGS@IAEKCKEEBICQCKBUIWG[BCJADCAEICBEDC@AEG@IESBGIGI@IBE@BGXW@KEM@CHCH@FADEHU@OIOCIGGMAOHMBEAQKGEIKMUG@GDG@ICC@AAAIC@A@ALCBC@C@BIAACAEFEBK@MFY\\KHWDCDGBM\\IJE@IMCAIJGTCBGCMBEDYb@JBDPJDFDJBBHB@FEBQBA@CF@BDFFDJNCJIFCJHT@DMDYKOEoCcIY@SDy`G@IMCIKI]_oWGGKEQCeScOM@UBSDD]FOFIPBPBNETAJ@JDNCFKBO@EBGFC@EGIEE@MEIBSCYUYAuRKLEBCFAF@DDH@FABM@MJC@WBKAIBCBEFIR@JBH@DGHAHBDPHFLDRGTONkLMFQDSAKKGQEKCEEAG@OLIFEGCAC@GPGDC@GGIMQGGEMBGFCBKAQMEEGM@ECGIAMHI@GB@BHLELKHIJEDC@IEGAYHMLIPAFAJDL@ZDHTXTNAHCBEHAXCDOFMLEFDFRLBDATCLIBQCo@GHCBIAMC[HKAUEO@GBAZGLAJ@FDLLNPTZnRBFB@FCFGHUHKLMBGHCBI@OIgEE@EBAFCLOFKHGTOXAF@JCHBHCBADA@EJBDFDBHALGJ@DCHSVgrIHGBK@]AQN_hQPEVGFGDED@HBDLFT@FFDFG\\@BFBP@LCRSRHRELBJEPBHGN@TDPBDB@DGHCF@DBDDBLKH@BB@DABMLDDFDRBJ@HKFERITE@HCF@FDBH@VHNHD@DAJINABA@MDGFENEHMJBNPNHHJFBDAHI@MCIMEFGCKBKJKB@JFPDLH@B@BEBADFDJ@BBBPADGHILBjEFAHKDCCA@CF@JCDBBD@JLPLGL@BIBEDDFHfHBDFADGLCPCNB@LADBBDIFCNONKFCBBFFJFDJ@BB@BCH@JB@ZJXALBJAJGFIBGBUDIBCNMDIDWBBFJJBVUFKJGDCD@FBLH@FEFERGFE@KFADAFBLHB@DGPCFG@EDC@GGAIGC@EAAMLDFIBFFAHBLJJDBLCBBDPJ@BFRGAEBKAAGA@ABCDAF@DBJ@FBFLAFBBHALBVPGLDFPB^BJDFFMVEJONBHAHLDBDCFGHEJBHGXBLAFJLHLPHL@PIXF\\Nt^TPJPPNLXVdLXF^CJEHGNCBMDCFAH@TBLFL@DODIGE@MJKDCDBDVRRLJLBDGFCBAF@BFFFXRNTRXNTHjFPFLHJRDRRTHHNDPBVJPJPFJHLVGHBDHFLANIVODGT@NFVRLFhFLHNLXX@BGLALEDGD@FBBP@PPHAFCF@JNDJBDJB@DBBDAHBNJNMNRF`^hALddJNHNFL@T@HCJ\\RNJ^d`PNADMCSBKHKRFHLJHNDpOVKR@PEf[PYTOTIRCRKf[nSb@XDPGVgRKRERBbFbPTDRADABCFADIFEBGJKDMBIHE@CBKDA`GAEGE@AD@AADCVDFEDGBCDBJAHDPNPHJNJBJFNEHBJDDMHKAOEQBEBAJCDCNAF@DC@EIIAEDCFCPALELIHKLETEFDBDD@DKHKJCJKVKHDHLIFACOCAFJDAJFDB@CIF@BBDBCDDJEDEA@DGCEBCBAFCBDB@BHFH@FCFBBCDBDDJC@CBAD@DD@ACC@IAA@ADAH@ACDABCACE@AEC@@EDB"]],"encodeOffsets":[[[115422,33135],[113812,32816],[113657,32694],[113726,32186],[114869,33164]]]},"properties":{"cp":[112.144146,32.042426],"name":"襄阳市","childNum":5}},{"id":"420700","geometry":{"type":"Polygon","coordinates":["@@WDK@ECAE@CAAG@QHC@@GQBK@CCCIEECMKAACCCIC@AJCBKE@ICEAAGCEA@IHCDA@G@C@GEK@CEGACICCGAI@CBKNCBI@GJEDYFOFcJMHYDGDIJAF@LIN@BBDRLBJEDCHGFCBKAKBKFKJAD@FBTOPk@MC[AGI@GFOECS@QDQHG@EFCBO@KFCDBJGFCFATIBICQKQSGKEK@EEIBCFGFEAECCeQEG@KECKACIBGFOBEAM@MBELEJGHOLITIJIDEVAJCLGAEAAQGAC@CHI@AQAECCCEQ@CHGXKDSTGDEDM@QFEDGLMBC@CC@KHE@KGMM@ELYJEDCEMQIGKKCOBENCFQEEEACBCJG@CCKCMC@UBGCIIMHGASGED@HEJDD@R@BEAADBBCBF@@BCBABIDGLEDcGMCC@EBE@CA@CACGCAIIBKEE@CDCHBDDBHDADOHKNMDQL@DDH@FEFKHCJ@DALOJG@EFBJADKNOPCTJL@NCD@DNNFLEP@DJDDDARBLBDNAF@HFHHDHDPBHBHARBPf\\JL@VDPHFH@ZRHNBJCdLtCPGFGJEP@LFLBR@NBRBDBTEDBRAHEJGJ@FFHJF@HED@D@DDFJ@BAF@JBHALABCJCJ@BBCFAHDPDFR@JJBDAFGJBPGN@FHHAJE`EHGCA@ADBHH@BBBDKHAF@HERRAlV^JvJvPhR\\VPJrP^@TALI\\]P_FgAGDK@S@]I@]DSDINYJONMLIhSRGhIZCbAIdBXF`@hGPGVOPSNYNcJgLC_IQ"],"encodeOffsets":[[117842,30986]]},"properties":{"cp":[114.890593,30.396536],"name":"鄂州市","childNum":1}},{"id":"420800","geometry":{"type":"MultiPolygon","coordinates":[["@@FGFCNMDIAG@AHAHBJEJKDIDBBFNAFKHEAIFOJGFKB@FRJLHBBAFEDADFLBHBBAHGBGFAPCFIBOFQBCFCF@HWDIDENGTDVANCF@LGF[A_DU@g@[AGEKIKKI@CDEJGTIBCEEGCMBC@AIECIAAAAABMAE@EBgEWGQEIKKcYIKAKACUICAAECACBE@II@C@EKGEIA@C@KLGDACDGBIDCAGBEBADAFKAAMDI@GCGBIK@GEEDKA@EBCACEHK@GFE@CCAC@EBIDMA@BELCBIEACKCACFGCCAEFEF@@AAC@A@AC@EC@KDIAKEKE@OF[NEGC@AFGD@FA@GBMCUIEKQI@IAAMGGMCCCAODGA@ALIBCGIC@@AAACBMJE@EGAADEIMUYGOIIGEmGOI]IKBMDOJgHSFGJGBGBG@CEAIAKFOBMEUEEICI@WAUEK@UFKLEHABGBSEICEG[cUMkQIEKIKGCIIUCGKCKA[FIK@IBMECQ@KFCHCBA@CAA@GJIDCDMFANEFE@AFOCEBADBBH@BBADEFAD@DFB@BIFFBCD@FCBDHBBFABBCJBHGNFLABIB@JCDGD@JFJ@DGHBB@DCBCHGBAJ@HMDEDABECcWSUYKOIqYuaUSYOSOWMEKaaUIOCCDBF@DCBMBCSWqAOBEZUPInQP@^D^HlPTDLCRIDEBEACCKCCM@UJIJEBG@EGEEOFE@@CAOACKCCBABJP@BCBWKESCCIBGFA@CCEIC@IDA@CC@CBGPILEBC@GCGGCMQAGBYOIGBEAKMCKDIDETOFGDOAEQUOGMCCDAHCTOPIEQaEYFUD@DDDAJCBCGGHKAICC@IAQQOWAY@KCGEMMCKL_AOAEEGIBMJMNEHGFgVSNSJ]DKCGEIUUAGBEDaDeEsaUIMBOFQLELE@AFEFEACD@DFH@BGBAFCDADBBDDCLBBNDBBELDHCDGLANCHEHEDM@GAIDKHCH@JKDGBiGO@SBCBCJE@GCIIE@EF@AEEAGB]BAFAHDFAFG@GAAUHIAGEI@EF@FSHCB@DDLAJFZJ^ETOPIHE@GAEACC@CDG@ECICCIBGDQPCHATBJBDDJ@HGRMTCLMRIHEPJPDJBLEDSBGDGbYLKJFDBD@HBDFBAHCLGB@JALADCDCJCDU^EDCH@DF@DJLHDRCHBDCF@FCFBHCDMDE@EHABCAABDLADBF@DBJCBBDED@DBBABDDH@DBEJC@@DABDLAB@DCBCDF@DDCH@DAJCBEDOROXUZDDF@BLH@DFFjAJDREVBDDH@FCBIDIC@EDKC@EBEH@DDJ@DAHGJCZLdDHHDBHC@M@GH@JK@AD@DADFB@DEA@DAA@DEA@BA@KBEHDJ[DCJ@LIFGH@BJRBHAFEJIBS@K@ICKKC@WBCBAHObILBDBDDBD@PMLCDBBBJNDLHJFJDDL@DDFDDLJDDD@DADSNO@IXCFCBKACDBHFLDV@HDLAFEBIAEDCJCBCAIKGGEBCBCFHLDLCJCDEACOACKIOGCLDHAHABKJ@B@DNVADADIBMAAB@FFF@FGDKBCDBFF@@HDDD@LDF@HCH@NVJLHFRLFBNAPGNBHHDJJP@PGVCFEBG@GD@DFN@LWXAHF@JAJ@JHAHFT@JFH@BCDAFJDBFCDIBADH\\JXAVDLDRAJFFDLDHFFX@LHLEH@RPNBD@NETODEHCJADBJRJ@JADAFEJGHGFABBJLADHBDHCJFF@BADBDL@NBFCH@THJHFB^EZBJHFJJHVHT@VGJIHADlE\\DTFHJNDHFFFBfMN@PRHFZH`DNHPGNIJKTET@NCf[JBVFJAVETIHCrIJ@JDLFLHPRJHjRZDTTHLZRJDF@ZEhJX@PCVOJC^OPYruHEH@F@LJNB`QLA\\G\\YPIHAD@HJBNHNBXAHIJO`GLEDCLBFBFHHNFTB`ADDHPAPF\\BVFN@JLHLBHALGRSPCLBlERCLILMDIP]FAjCNGRUVeJYBOC_@QDKFIVCPBXF^APKRY\\aVGbJNHLLHDL@LAdWLDNJJBPDXAVEPOBKDED@NFHEL@PJFJFDBCJEDGJ@FA@CACKGC@EJABCABIACBCLCJOFAFBDHFBaNMTWFC^gRH\\CbU`IBGBM@EFAD@DNPFHF","@@CAABDD@BDBBACE","@@DCC@SBBDNCDB","@@ACK@EFFDJNHC@G","@@D@@EID@D","@@@CE@AAGBAF@BDBBBDAACHD@AB@"]],"encodeOffsets":[[[116037,32093],[115535,31461],[115318,31441],[114760,31424],[115376,31363],[115352,31347]]]},"properties":{"cp":[112.204251,31.03542],"name":"荆门市","childNum":6}},{"id":"420900","geometry":{"type":"MultiPolygon","coordinates":[["@@BMC@@\\B@","@@@CG@ARF@BDJAH@@CQE","@@@CEB@DB@BDB@","@@EEAKGMMGC@]BCDALCBC@ACAEFQAGMKCEAQKICIAGBURiDQBECGACGAEAGBMJEBCEG[GQAUDcEKCCG@IBEFKNE@GC@EDUAIEKGEOCEEGYIO@IBGFEHCJIECACJ[CaEDID_@QFKAGEkDSCCBAJEAED@JCBQAQEKEA@INI@GDKTGDMACDAH@HAFUTGDGCKEKKUGCCCAOCICCKBSACIAGES]KAGBG@CCCMIKDMEEJO@ECAG@IBMAAACSBMFQPaFGPCDEDEJGBCAKBAJFD@DCD@NHFARQDE@MHEBCIUUQCKKGAIAEUSEEaWQGEE@GFGACFE@IAIEGFIJEDGCI@ADA@EKG@A@ICAIBCME@OB@EDGAEKGGKBOLAFCBCDGGIBGNQ@IDAD@BCGE@AFAACGCDCFAAGEABEC@CACKGCAEE@A@CAAKACFCDCAKEC@C@AFBAEDAAEBCEGDCDIACBC@CGCDA@CDGEC@EJCEE@CG@@AFMLGACBG@GBEDWDiRUGIEaF]HQBGAUACQDEAAEAAa\\]@WFC@EGCAKJ@B@DaLE@EB³HEAGACGC@[LE@GBI@_MECGFACGBEEOFM@GEK@CCEGKEEICCIDCJCDGGGACAAMBCRBD@BEAEISCMFKFE@ACCMACDADAFKBEA@CJG@AGCBEAI@CDAR@JBHJF@BCEIDONMD@HFNDPU\\ESWQYWQEEAE@EBCXEDADCAEEESIAGVKFGBAEO@EJIEMYWKGUCSD@GAAC@GJGCQcC[FWACQKI@GNAJIFIEGMUMCGEOCQCAQ@QQQUAGMMIMQKEMCOCGI@IAQEGGC@M@iCGC@GCQSQGCAEJAFC@EQBS@OBCBONILMTUH_@WBGDJLHlDHJPBFMNANELCDEBCAQSC@CFMDCNEHCAQOEAUAOIO_SSCKA_CIGEGCUAMEIGKKEM@[EEIAKDQRKFI@ECCF@TER@FHV@NF`AT@BeNGFCF@^CDPFBCB@JPBHDBBLADA@EGKNFNERABEFGFIDATBZBJDJLRN\\AHFBCHAB@DJPLDDhCBIBCHAJCBEAWREnPBDD@TAJADKDSACB@DDBJDFBHPFL@LELMJKFAFBDHDDBDPLJ@FID@BBF@JBH@HD@@FOZW\\GNMJU`OPiRAF@TMBADBDADMCOBKPAJBNOFADBLERBDDDF@@B@BBD@BE@EFBFDDEHBDLDBDFDF@DADI@ANBJCL@BDEF@HGLDFDBFAB@CLFF@HJLHAHDJ@JCF@ENCBABAFBHCDAJCHBDHCLKD@B@FJLH@F@DJJF@DADBBFDBVJBDBLJLdZLLFJHRFXAh@FBFANBBBBJBFDBJD@NAHDFFADSJIHCF@DLJJLFLBH@\\@hCVB`E\\KHE@MDUBSCMHCFCJGXE@EDADERAPEJODEBAHGHABGAKACECBEFABGAIKEQA@ELIHEPBJGFELMBAECACJILIFGAGB@BBHCJMNEDEHBBFNDVDBJ@DC@CDANNDNC`GXG`BLFFVHVDLCbYNAJ@XPLDNBREL@HLF@NEF@NHHADBDFAFBBXBVYPGBCNMLCLMNC@GDAHAJFL@BABEDCDFDB@HDFFAHDJEHJAB@FNFFGHBBDCD@BDDFB@BBB@DD@FCDA@BCJTBDD@EBAVEJIDK@M@APGFIHCL@HBFB@LDBPBDFPLHDFHHNDDHBH@HDFDDFTbf^TLF@\\EHENCNAF@JEJ@LEHEJKRGRBLFTGL@XHPNRHLCX]AMFQFGNEFBHAPhFDNDPEFEFQJKFAhG@SCCGAOBOECMDGD@BEBAHBNBFFBA@CBAFB@HRHJHDBDCHAFBFAD@BJADG@BTENDLAHFFF@DAJ@BABCAGRGLBNFVTDHLDHBNARKJ@PPLXDXCHMNCJDLDF\\PFFBDCJBHFDLDLHDHDHHDHBFPAFGBO@KDCFCPBHHTN`LRJRBHC\\BXP^JPHRDJ@JANKHOFQTOV@PFNJNRN@DEHMJEHAF@F\\ZLHBDKPADKBAFVlD@DFBTJN@F@NBDNLN@PGF@RBDB@JHJFDHBL@ZEPKPERMHEJ@DBLPBBD@@GAIBKHINOBC@E\\[FSNGDMHITQFGDIDCH@NFTENH\\A^BFAJG`KXEJAFBFBHHH@ZIBEDKFCH@FHD@NIHAJAFBBRB@D@JGFAHDHJHDNARID@dJDD@FKJAFJVBFFBP@BAFQHMFSDAJBLFDDCLNBBJCNDFH@TGLFDIB@JFLADCDMAAGICM@GFMEGCE@IFOEC@CDEPABABC@AMSOBCAG[IEKIIHQ@CCKECBU@IBGFUBUFS","@@EJR^DJLMEGCCBCCM"]],"encodeOffsets":[[[116116,31460],[116113,31413],[116107,31416],[117309,32327],[116163,31222]]]},"properties":{"cp":[113.926655,30.926423],"name":"孝感市","childNum":5}},{"id":"421000","geometry":{"type":"MultiPolygon","coordinates":[["@@GC@BBB@DBBBC","@@RFBAGEWMwiECGBBFPVNLPJVH","@@hWPKKOo`KD","@@DCDD@B@HENCBMBA@@EI@ABGDAFFXALD@LBFF@HFJAVLFFFFL@HHF@BADKHKDAABEAGE@EHEBC@CAE@CFEV@HJ@LBdZLTBHTXP^PPPHlRbR\\PlfZNRFTDV@RCJEPQDGJeFQHK\\_JOFGFBFFD@F@FIAOFID@lHJ@ZGlIJBHDDLBJFjN`@LDPDHDB@DLLNCPIPUViRSrqNGTELAf@VDCNBDHBDDBN@HGFOBIFeXUVMNQXIRKN@DDNA`@LDPBNCZEPGPQRMFE@BAFECAOHEABCNEACC@SBSJIAEBONIJABBFHFBADEFCF@DBGL@DHHHF@BQFKFABHHBJDJDPBFHBP@ET@DDFPDVhxBD@JGPCDEDMAGHK@CD@BLFJHFNBDCLCFFDNFFDDDJHBDJBDBBDAFJJDVFF@DCD@BZHJHL@FJDBD@BCAEBATHBACEHAD@FFBFP@LIZKHaHCTAFCAKCIIOFOJGNQDKNSHQ@GCIACAIBSDGROHCJADDDJ@FCH@DDDNDF@JGLIDEFSI]EY@MAGDETG@EFEJ@HFJBD@NEF@ALGFICEBABA^BHFF@BFEF@JJHDF@DIDATAP@jHHALC@IDGLGJCHBN@FCFGDGBMHKDCCGFKAAMCAADKCCAABCDCBEHA@AEG@CDCFBFEBEF@FKRKPENAVJtbfFbCFCHAVBJVHFLD^CTITMhUHEFGNMNIJAAGGEKECGCAC@IAECAE@IHCHOLGBCD@DCBSAK@KGYB[F_NYd]LQPOXYLaHIIG@gDMFGJCNCLW@YWYEG@EDKJGLCPAdDLAbMLGjEFCVOJ@HBN@RIfDZABUÜ@OXUHGFGFELDDFBd@FDHPDH@RO`AJFNHJhEHDHDLXFFNHJBDHFBPEFG@EAM@ADCLDL@XOHARDL@PE^EBADCEQBGPGJGHARFJBXK\\HPLPFBBBHGTAHHFNDDD@DEN@HDDHFTFNAVMDEP]DEPI^UJAjLHANCJIFCN@PA~PN@PFhJLCL@TIH@F@JFF@XAb@~J`PNNLPDHBLHHLB^CRBD@TIJIHEZMPKHC^@FARS^IRMFECA@CFGDEDGDADE@KBAPINKHCPKJCFEDGCCAMBEJINEJAHBFDHDHALCD@FAZJZDNHNDX@HDHAlHNFJAJGLELCHBRHHNHDD@HC\\FHJDJBPDHJDNBDAHDBFEH@FBDFFF@PEFEH@FKTGHB@HB@JBBDADBBF@DDFCJB|BDARGRHDDBJ@ZJDADED@dNNGZAPB^FxZPDHB\\CPCPIªve_FEDGBKGWGKMK_åuWIS]OYU[_UYMMWK_IeCEaByHsK}[IG{SO{_MIQIqsswcOYQqe_]QK__ykeIU@GIKUOoµuyUOGBQNEBCAWAC@MHMADQBOCIGGMEG@KFCHEZEO|ENGF[FSA_OyeQSQ_GEIAQBKHENG\\KS|E`S|EL@RFHNNrl^NJHLPJLhZTRJPJRLfHhL\\@JCFEFMAMGQYUQ[QGIEQMYK]CEYUKCC@CBGFEHAF@bHdB\\C`EPGFLPROBDBXCHGL]TSHQ@WGEEZEFCOOIDQBUAOEeWyqYOQEDELIHABACGMGIEACFIDKAIOCECBMFK@AECOBICG@ECEEBOCGIEE@CBA@EGEAWQGBAB@DDHCDG@OEEI@IAMECIEMUACDIACECE@BMEACBBGEKKGCBGRCDYASMC@ENKRMHGHEBC@GCMIICA@AHCDQFMHcFAAICSMQOEAEGKA[JMDCDE@IDCFAF@RADCDmHQCC@KFIDUGE@CBCAISKKCK@WCE]cOEIYE@AJA@IKKIS]CAWBUDSBMASGEOAQcMKBCACICEAQEKCLEPDnDLNFHHTnDRCNBHORCDKAKBcPSNMBICOLELEHALHRPPDHFPG@IAGEGCQMACDG@GEEEAODGAEIAU@AONCLEFC^CFGLKHIDE@KIOEMF[@KACBCHCBGECACFGVURGJCAEEGCE@GBICKD@BEPELBDFBBDCJBHLFHH@FAHBXFPADKFGLBPERCGGCCCCGPOFI@CCAEDGHKBENEFGBSDGJULMJABGCEBCFI@EDIXA@I@GGWDMHEAABBHG\\BHZ\\@FCDIBO@[IKDIDCFGDGRCFKBKDG@EBE@GDI@GB@LA@CK[EC@EDKTOLKDE@KEC@@HDH@NCBEAE@IFMDABBNCDKDI@GBGFMF@BEAC@@BA@ABAACDE@ADEACDCBCA@BGDQAADA@@CEB@AAA@DECEBABAA@ACBACABCA@AA@@CADCA@ACCBEA@BCAABACAACCC@AEDAAA@AA@AA@@@AA@ACBGA@AB@BCAA@AAB@CAAEAAAA@@@E@CAC@BBEBCCACE@A@CAKFC@AAE@ABBBABCCEAABAAEBA@ABAAABE@CBBDADE@ED@AGAEDCCABC@EDACCAADAA@BC@C@CGMBGCE@OACDC@CFGAA@@FEDECABCAACIFIB@BC@KAIECACBADCJCDOBCBALCFEFEPCDGBOAOEO@UIMAI@GDGDEHEBMBCGGAMFKHWMIKEEKAMEQDKFMPBJJJBJMECAC@AB@DJR@HKBCHK@SGEBK@AOCCA@GFITCH@JMDDJMPE@@A@ACEAAA@KPGDIBKNALDLAFWNQAEDMACDGVITGDI@A@EHFFJBL@lFx@NDHDHRF`HNHFjLTPLHLDFDNZJJ`@FCHITAHBHCJGFAdDHAZQ\\ChTH@HAHEXS`N`XLHLBHD@D@PDJCX","@@@EHCJKoO@FFJPJAL"]],"encodeOffsets":[[[115746,30917],[116665,30749],[115612,30507],[114276,30880],[114267,30891]]]},"properties":{"cp":[112.23813,30.326857],"name":"荆州市","childNum":5}},{"id":"421100","geometry":{"type":"MultiPolygon","coordinates":[["@@\\UHCDEEMMOOE@CPQ@GAASKAC`GXCLKB@B@FLZP@@DGH@FDF@F@JEBCDID_FODCD@HBHFB@BEBIGIAWEO@EDCPIJQDCF@PBHBTFNAXKVSFGTcBECSBS@KBE@SDGRYHIJQFEfYLAHBFDFFHRF^DDXFNFJHFHHVJNJFRDPA`E\\GRETSXWLIDEHQNSPIHGFCPcBKLKLALDPLBFDDLF^HbIL@DBNHHJRNTHFBHANIDKHQBePWLIFGB@BDHBRQNK\\IDEBOAOCKDGJA`JHAfITML@HBFADIDYBEHCLAfHhCAIDM@MFIDWJQDYOBU@GBO@CAEICCSF]GGEKEMMECMAOEGG@ICC_OEEMIGCEBCAG[EAQCIBE@MGMA[IQQGCGAECCOWWEECKDMNMPKAOHKAGOQ@EBCBAJCJBDC@CACMKSGCCAC@MMAMBE@MGICIDONc@ICIKMmGSKQAEBQBGIK@ENIFEFI@IPCLGF@LGBE@KJGNGFEBE@GBOKKAEFMPUFCD@BLFHjGHCHQBCTATKFGAEEKPU@GFQ@EDAPEHCFKDMLKFAN@BACCSQKWKY@IFM@EACGCCGBMDCLANILADAFYFCFBhGCGKGMFMCECIUIKCAIAG@GIQMEG@ER[FQHKZUFK@MCEUQACDG\\KHEbL^AJAVIXIHGBMDUBCBQDEFIFEHCVARKLGDQFG^ELGFGFALQDC@ECOOYBWLcHOPUNGHEDUBKAMGOAID]ISAGBIRWDIBGAMAEOQEG@GDQBcCMKM@MHMFAJITWRWluNUDYCW@kFqyWg[SOyq½ykQmGS@qFÓrÙxkboV_DgCQCwIAyCk@aDqJgTOJWTKPKbEFMNWLMNCN@LHZ@HCJIFMFWRS^[pON[RUTKZAJB`ARCVEPax|kfMVSB_JIBGAOEUMKAE@kD[FcRUVGNC`FbJRDX@HKIhMdMZOTcXiH_@WEcAJaBYDgJQHgTKJMNIPMZCJCT@^J@^@TCLBHEhO`[^KJSBO@FDRFlHvFHJD@DBBDEJCDC@CEE@@LILENUTGDAA@GAAICEEGBEJ@DEJDNJF@FCFIJGLAFKNENAHHJ@DDHBDJBPMNJXHTDLFfbLDDDHHDLBZAT@FFBFBF@PEJBBABKBA\\GF@NPLDFAFCFGNILOFDFJ@H@HKLEBED@HJDLBDBLFFFD@BILBDFBJBBF@@KBEJDBBANBJHHJBFHADCHMN@FDFCDHHFFF@D@FGFCDDAJLBPEHBHEGIDCHAJ@HJHDJAHF@DGD@HH@DFHDRJJBLHBFCDAPEDSBOBCBADCD@BH@DD@DKHK@ADEBGGGDIFGH@BJHFLMFA@CAAEA@KBKAE@ADIDCFIFKREB@DDDEPFD@DDDHDD@@@CHE@CCA@EFID@JDFH@FDBF@BCDDDAHBBGHEAA@AJBRDF@HIPEBEAGIHIFSIM@CB@IEBGGGCAG@EBCDADBB@FBDBHGEM@@CCAABAC@@AFCBADADBfFDDBB@DABBCDAF@DDDCHBBAACBICEDCBAIGAABAEDC@A@ABAOU@B]QQ@KDQCIGQKEIGAOBCGFGRALEBCAGFCHKAGKEIUEEOAW@CJQBACK@@FADBFC@CAGBABCLC@@FMDABBFFDBPEJ@D@JCBC@OKA@CDFBBFFDAH@AE@@AGAUSCAAQEIEQGGC@ENFFBFABCJ@FDBF@BFCBIAABCBDFCHC@I@IAKGEE@EIAGES@ICEFA@@CCEOCAEDCBCEMFEAEECBCFCBELC@EEAI@KFAFDJABCACEUBECCAGC@IAAO@OKEBEHAJCBAA@EIKOCQGU@CFBRKJIdkLKFa\\KR@HCBA@CAC@AEEA@B@FEHWVGBYBCB@HAFILGN@JFDBJVLCHFRDDFHFTHLLR@FGHAH@FLP@BMLCL@NEBAD@HGFOBOBQDIRCDUJILE@GCE@ADAHAD@JBDH@L@FBDF@DCDQFYFABHH@DGBGDEBOCGDADABKDEHGFGLMJ@HAFEV@DDFPLFHRfNN@LFHJFBB@JDJB\\I\\BDFDIJGDEFAH@JJPHZFFPDHFFLBJCV@FHDF@LMFEJAH@DDFLCdBVHRH\\DFFANIHAFBHBBDDHAFCRQjAVBHDJLJBRDFNLBHERBFBDD@DABKDC^AD@NHHNBLFFBKBCZMBB@HDBXBJNDRD@P@HBFBHLBBLCJD^EDG@GL@FCFGBKFCV[HEH@T@TFDABIIQ@GBEBANBVFFCBIBADAPFVJPGRFJGRCP@@CII@WBCRM@CCGBENGTALBPCVQFGFOJ@D@JHPXDDfFLABOPAD@TJ`FFBFFJ@FATQFABDBJDFNHJHLFJJHBH@HADABCBOFIFCHAHIDAF@FNBNPFBDADQPBFPFBBR^FNBBL@BA@KPIHANBB@@CDCFBPEBDDE\\@BAF@BAH@BBDAFBDABDDHIBAD@DRDJDPPADKJCF@D@FJNGBEBAD@HBHFHPJZLBNGVBFTF\\DTBRALCHE@[DKPMJABCAGBCRALBB@BCDIBCFAVBNDDABAIMAGBKEIGSIMACBO@EAEKQ@EJOBU@GAICAGMAQDKHGFMFGD@RDFAPEPABAPQAMQW@CTIFBDBPPJDHBHARGNULCNB\\PJPHJB@`GbJ","@@AeC@EC@EACEDK`CDPV@ABBHCD@B@AA@AB@BCBB","@@@EECG@CDBJBDBA@DDABCDC"]],"encodeOffsets":[[[118143,32160],[117698,31765],[117746,31739]]]},"properties":{"cp":[115.472199,30.453667],"name":"黄冈市","childNum":3}},{"id":"421200","geometry":{"type":"MultiPolygon","coordinates":[["@@EH@LHTj|^pRZd^rN^@PAra\\W\\oPeRIHAAIEGIBCAACDUDCLBDBFFBDHFF@D@bF`IR@HATOFK@GDER[X[FABCFIFEDEBGBSGUREFGD[BGDCnEHCDMDO@MCWBMDITQHIDQCO@MlKJCvHNPLVDNFHHJJDDZCLHH@DFF@VI^ERAVE\\MFE\\KF@VANEBAACHETANIBCDBAD@BLBDBJAJABCCCBGN@BEB@JEHEFBN@HKFA@CDEFATAFEHK@CSCEACEAEACDAB@`NFAFCAGBEJCbFTFHANCFE@KCEBAFAYdAFMJAJ@HElMD@LFPCJBAQCEAG@EEWBGIUASBADAfADYAMCOBEDGBE@EKQAUAIKQBIBCNM\\SLFJBNCFEL@RAFEL@@FD@FAR@TBNEXAHCLQ@G@GHO@CAIBETA^EDIV_B[DMJKJIBCGeBOBCFCHILKBECG@GBEFAX@`EEeDCJCFGZEEMKGAW@CDGdEDABCAEIIAKIIUGEAGCIDCHI@CAA@CF@BH^AFADE@ACCI@GCCSCEBIC@@FHAFFHHFIREBEAACCOEICSISOECAGOUMAAFCDEDBJBDAFEP}BCF@`XJ@LFHHAHEDODCFAFADDFNHDDTLRDH@DEBECECEBEBADCACC@AAL@@B@BBBDC@CHACCEBAKACGEKMEBAADIACHGAS@CGI@CG@GFMDCA@CCCEAAA@ECCBA@AECEICAAESCACMCAFBF@DCFCDMBOGEEAYSGAK@cHSEKIIMEMAC_DGDB`AHILED[FQ@OESCG@UHI@ICOAYOKkgECQQMyWcCEFCB[@UAMEMBCBEJBJIAOJDDLDABIJGCAKE@OGKBqCQE]UEAE@IFWAG@GDGDMTUjGFIBGHG@YOEMKAEDKD[@EUQAMBCPIDI@CECIK@YEAGCFSHKBQAGAEKCIAEBOHE@GA_SKCS@YSG@MFG@aGqCWBYCMBeIWCCCBQCOIOECQGCCCYCEEE[OOCIEUQUGOaEIEEKBIAMGEKAIAYBUGM@CIGAGI@GAMIICEAGCEKCAMBOAMFMBGDAFDHELAJDHLN@D[@GAMIIAKBEHYL@DFHFV@FADEFKPCBSDcIKEC@CDGCGEIBEAMI@ICKSUIMIEE@CBKLCRGHCLBNLXAFCBMAQMIKAKCGSIE@IBEHAHFPBVBDBPCFGHAFBJ@DYJCFCJ@LDLMHCPFHPPJFF@BDVZDJCdBNEJCBKDSEMBEC@GAAI@G@MLENEFCNEFEBGA[@IBCBAB@Z@DHFFBDLLZXzTPHDPDLFJ\\EL@VCJHPFJFFHHXHLBPA\\BPEDALHFDHVLN@JIP@BPRRJDF@JGHELEBCHEF@BDDIDODCBG@EDAFA@ADC@GHC@ADE@@DIDKR@JKHADCBEBC@GFIGCDICIBACIDAA@AWAQDADBFADCB@J@BDANFHFVD@JBBJBRCHDPD@BCF@FDDJAHBDA@DLFDDDBBCFAFDBB@FDBCFFHCDBBLDHBDB@DFBFAPDDHAJBBDB@HEFI@GHM\\C@GAG@ECA@EHBHEFBHCFFDCDBFABIAEBEAFJI@EFCAGGEAC@KF@DBBN@DBCFIHETGJDNKNAFDFABMCIBMM@ADCAAI@GEGBG@C@SAGBGEAAIBGH_FQBOCiDQRD`PVTbFX@LEPGL@FDDIHJRHNFFJBCDGD@BHPDDDHJDBB@BEBIAA@CF@BDBJBLH@DCJLPCJMNAHrZTP|JH~\\tLzGbAFfD`JXLNNªÈPEEGAEDAFB\\R`Z`RADQEALrNXJæv`NLHLHXALCHEF`uf©OJODG@MBM@gO_M]EOAYBMH","@@aIGCOMOQOFHHZV^PXF"]],"encodeOffsets":[[[116600,30915],[116665,30749]]]},"properties":{"cp":[114.328963,29.832798],"name":"咸宁市","childNum":2}},{"id":"421300","geometry":{"type":"MultiPolygon","coordinates":[["@@VILCDI@OBCFEL@DEF@BCBGEIAEKA@A@IJKJGB@FBFRDBNADGBGAEYMISAQBILKLEBCDMJEBC@CACqUIO@CBGLOBQCASEACDYBAHEFGF]BGNKLKDAPHDBBABC@KFEDUMKYeDoAGIMSUOGE@ERQFIBAALq@aTINCFMb]DC`ILIDGDGACCEIGIOEAG@CAEKMOAECM@GDEFAHGHENDXMT@JCRIH@BA@CAEGGIQCcFEHAHGPENADABCDK@GCQDIG[BIFCFEASBIFEJCPMHCF@JHNIFBDBPHNBD@DDVhPRLDNBHBHC@C@ACG@A@Cl[FG@QAEIKIO@EBEJMBMCSBGDEFCPEDCBC@GHK@QFKHGNEF@FBDFbXLHZBPCD@FFFBH@NAH@FDBDBLDDNBbEBFJHBJXVJFJAAGQ_AGBALABCLOACKG[Y@EBEFGNIFG@CQMIMEM@G@GPURSPELGBM@IK[GIQcAWD[AGIQKQM_GSAGDODELCP@HABEEOGAGCCGCGKGKCECAGDIACEE[OCECKDINMDGCWKWOOI@QLMBGAKCCGUSMEKAQHBHADABI@CBE@EEBGCKFMASH@BCAIC@EBEAGBCDCAIGQG@GEAAB@DABEEMAGAABAFC@CHDNPFPAHBDD@TgHEBILEREFOFMCECOgGBEAMFEHERBNW^KDQGOMWGK@SHKEQAQHILGFKFI@IFE@MBMDGF[FE@SKe]SaCEECGCG@GACCGMEGGCOKCEOACA@KEAGAK@GDEJOH@B@NCLIJUFAB@FCCSADI@ACBEDC@@CAA@AEACC@ADCACGAEHME@EBAGIIFGCEBCE@GCACECDAFABK@IEGBCB@HMDKNKDMNADOHUZWAAABECECAGBMGE@MFE@GKK@QFMAKCWOI@MBaZKDUCUGEEAKH_HWD_CMMMCB@DCDI@CACUEMKIOECMC@EB@FANAH_JaV[DQG]hEDSXMNbEACGEAEBIPKDADBDAJDBBAFID@LHBD@DEBI@CHIFADECEIOIK@GFMEC@CFALOPUFWBOCIAMIKCcXKBK@GCKKMGaIUH[bQZOL]BWEOAUDEJCL@RD`APIZUfQVMHiDEBO^CJKNKJQDkFKAODQTKHGBKAKG]NGHCJCTDHDPC^CHAJDR@XFV^VFN@LG^@JDDDDJ@\\EXMHAJFDLFFHFJBT@TBJDJPJT`xHFVFNCHCLKLBFDHJHJBLTNNNLPNJTAFADCHIPEJAFDPNJNEPCHGFCJCJIVARDFHJXDDAPFLPHPFtDDJEBBBLDJDDFAJ@DCPBFDBHAJCH]N[DK@KD@`AHBrAXAbJNb\\Z^TT`jAVg`GNBnDVHRHPBPAzCRIVGXFLHFRBX@`JPPRVJLFRAPWTWNGLEbRLZFvID@LNDHjDJBLCLH@NH\\AL@HRPJF\\@bRLDF@HCJGLADADMHOFEna\\KLKTMJADE@OFKLE^CLENGDE@E_SAGDG\\E^cHCLCP@NFJBVGDCJGDMDEXALCJMJ@HD|hLDJLDBHCJDNJ\\R^LPJDHJFPAFED@HDH@EYBSFGFBJDFDCTENGBADAFHDJHDJFBJCH@D@DDLDGNALHCFBHKHDZA@FCFUFAH@DBBJBHAHCHGLCJBFDBF@`NJJDFHBDFL@JJJFLL@DEDAD@HF@BIJDFBBPIPFH@NIPJF@DADMBCD@H@HLDB","@@DC@KEAI@@CFCBCKACHATEN@DBBF@HCHG"]],"encodeOffsets":[[[116448,33196],[116499,33059]]]},"properties":{"cp":[113.37377,31.717497],"name":"随州市","childNum":2}},{"id":"422800","geometry":{"type":"MultiPolygon","coordinates":[["@@CMGISCIE@CBCPM@OFKIIJOLEJEBE@EBCBAXBNKFEBARFLERDJCDC@AMGGIOIEG@KBGBGFK@CCICAEAMBBMEEHIAGP@PANADABCEK@CBUBCNCJIDIAEDCLG`KFCAOEGOKEEICECGMAGIKQKgAYECEDSVuBKOEgEG@EM@eAKFaA[I[BGAGGICICIAKCICMCEAABAJ@DCDQNO@IFEAEGGOGOEC@OJQEMGOMGKGCOQQAECMUME[CDEECCABKACFGHEAGGOKKGIEMG]JKFCLAPATBXHLLRJT\\^BX@VALELMF_HWPKHKDCN@ASJOGQEACEAe@EEC@OHEN@DOHM@EMD[A@WCK@CEISIAC@ABEHEHKDCDAHBHAPIJGFQBIDEAMIG@E@AZALFBAFQAAKBGAKEAA@CFG@EOeGCKBIA@CAEIGAA@EAGAKEGBEACQCGEU@GCUNA@@CPMBCA@CAGASGKGI@QJGCCC@GN]FI@AGI@EDQ@KAAIECE@QFGPE@G@CEGKGKKIQGKCM@Y\\UKEO@CCFIJIRMJMBGGSWiGUCIAYACKBiLQCWGIAm@]IKGJQHGHALAJBJANIJCDAJSACAAOCMAICGECMBEHGJCfMBM@QBCDEDA\\G\\KPIFEBEKOg[EEACbMLADGBGAGEE_SGKDWDGAEKMAG@aOOCECI@EBGHKFM@GU_BGHGPG`KTCJFTTLDTDXGR@`DVALBHDFFXlVX\\VTHFDDFLDJFLMNG`Ol@LCJMHEBCACIKUEICKKYOCCACAQIIAIBU@MCCIIEC@EBAR@FCLID@JFF@VODE@IAGEI@CV[HaBAFA`@HAD@FOBCFARHNDDA@CDADBF@@EBAJCHEFITe@MV_FMAKMSGEK@CAQQOEaUQIMKQQECWIKCGESMUGKAOBEFULiPGHGBGECMMOEIAQ@K@QCESEk@AAAMICCCoSWMSDMJEJDPCDOPAD@FGBUCOCIEKAOBIFEDCJAT@PCPWZQHQLQRKH]NUPKB_LUBGA[ASBEHILOP[TcRYAYCQAMCQA_IeKKC[@IAGDUBOEMAMHgBCDBBCFKIKDIIGA[KI@KLCBEAECKCIBIHQHMCQ@cE_@{MWKOKEG@EICQ@EEBKFADDBACABAVGHG@CAAUMCE@EHCFG@KCGGGIEWGMGWEUCAEJW@EEKGKSO@CRILQDKAAKEMEi@QAQKEAKDMP@FBV@FC@KCI@gLQHgCYECACCBMMKSMCBQLaBABDJCBCJCACAQDCE@KJKJABA@AAAG@AIEEC@OHIBICAGBAL@B@@IBIMiKMCOW@EDGDCDABGCEGCUAYJSDGAGCAGBGHKFAB@LADQBCBC@ECCC@CBEDEAG@SFGLIBGAACCEA_RC@CAKKFK@ICGIKAAHMROBG@CCACFE@QI@CFCBOC@EFIDCBGAECCGYOAGCC@ACI@CFCJGRW@GEIACJALOACA@KDODEJCBEBWKMCECEGAU@KEaH[BOCOBAPABAAGDGAICCBKGGGCEICAYWSKCC{Uq[EE@EBGHEXYBCIi@EFI@AOGIMAG@IHODERIDC@M@EECUAMDKKIEEBIDIDEPUXCFAF[NQTOHKNKBEJMFC@KIEGI@SEalFF@DEHMN@DCHEF@BJRHDALLR@HFBDDDLNRHNCFSTcJC@GBCJJPHZ@FGBADLZAFGNHTCLBFKJCHEHWJSZQFOPIDKAACCIGAACKEEGCGAGBeCACDG@K@IAK@IFKBIQM@CCAEDQAICEOAGEeBSAMCQBQCA@CPLRDNF@BDCVBDHJATBFFHBHCBDDALTXIJ@HMZIFKDW@UJYAKDELGB@BCTD@@DGLED@DH`DBLBBBABBDLHFF@NCVDLAJADMLAFFLLP^TFJNHDBADADCBG@KNBDPN@BGJGLGSECIBEKC@EFYNADBBJFZdDNCJCDGBAB@DEDMDIECCICC@EHALCDCTCBC@EGICECGBCFBH@BJHDF@DABMD@ECQGMGIAG@IDGBECAG@EBEDALE@KGKAMAGDCL@HLJNGBNHLAPCHMBEF@DHR@FCFIBIBM@S@IC@CEALSNFNEHGBGGSBCFEL@BA@CCCC@I@CHEFGDG@EA@AHICG@GAAABALC@@EG@@BGDKH@LCHMLKBGFKBOFCFDFPN@FGHG@KCIEQGG@CHDFHHDH@FADKHKTHLBLDJAFCHEFGA@B@XHJBHEHAHB^BRCHMNGAGBEBEFADB@LAJBDBBH@HADE@CF@BFH@HCDIBGJHDBFABGBOEMHOACB@D@DBFABIDCBGBCCQAGCMF@CEEOGCE@GAEQAACFQAGEGUMCEMBEEQWUaCKOUCMFGLCRCJEFGBGCEGCIA@CAAEAM@IECEKNCACEMC@CNGFIBEAIOGE@GFWZ_FEBKNCF@FSCI@SDFTANFBHL@JANCDEB]KGBELCPFJBNFDDFAVEFI@IFC@CBCFAHABBB@HABEDG@E@ACDEBECYGACB_BKDBD@FDFBJFDEJBDTJVP@BIJABLFJIHCDABBB@@DFABFDBBDDB@BFAHFBFF@BD@LFDL@hQDIFCH@LAVFXBJRDDFBRADGACBAFGDEDFBNAJ@FCFBDDBFFDHERFDBHQfBPDPRdLRDXBDFDDFBRGJIDG@AB@jFfCDGB@B@BLF@FIHE@GGICABAFFNNRDBDABCDBFD@VFJV^RnLdNZABI@SLDVRLbEF@DFJJBJPHRAFA@QAK@GPSBMJ@DBD@FGFG@CBCF@HAD@FEDADI@ADFDEFBDD@EF@DQLKCEBC@KF@BEFAHEBCFIFCJ[P@FGH@BIPICECgCEBAFKPOFSNCACB@D@NCLHD^BLFBFEF@TBBLDBBOZQNCFBFDHHFFBBDCJAFDPABE@CBBJCFBHDB@FJF@DB@DAD@AFBDHAFDD@HOBB@HDBF@JFDBDBDCAKHDHEPAJBLFHHFJFDTDPAJCJINIDEBBBDBBLIDABBCDEDPBHETABCIAA@BALEHGDEAGBAHADDBJJHHBDF@FFDN@ANH@HA\\R@D@BKBAJL@VHFJGB@DHFHAHJVFBBDFFBBHCLDD@JGHCHGZFHRJNHPBlAFAFIAGDMJQEGDE@GBEAGHEFABCLABEDC@CECACBGBCLCNGBCCCAGHG\\OJAJFDJHDLBLCF@dTHALKFKDMFCBAZNJNNDH@HJHXLdlHHBF@HBD^^TPrZNNb`VJFAFGDCDBTPDBJIJ@HDBLDBLNNHNBFDDJDBFEBGFEHCFCDBHAL@BADALHBAJFJBHADAFKFAJDBHDDH@FAJKFIBGEGCC@GIOICUAGAGEGCCKDGJKDQJOPMHOJQXSCIBCFAF@NHFABQFGHBFLZTHNFDZ@JBHCrlXFDEDQCOEAB@DBDHFhJLFNL^PjjHBAI@CX]DBNLHBDCIWQE@ABEPGd[NMFITY@G_cOY@CFGBCAQFSJEHIF@TT`l\\Zr|PXPhFLZNRXPHfHDFNVXTFDNLTJHHRBFKBMOU@CJArRJALBHF@FAFHBPPAFGBCDBFJVFTXJpHpbFHLRFNAHBDEP@LADNFZFHDJBHHFLNHFBDABCACCGAEBCB@NLRFDDBFGFCHBDBDANBFDFPLFDTJhZl`bPnHFFLDx`nRTNLHNBJAJGNERALIHBHDB@DGBMDAJ@FAJ@DDFFNFLFLCLBNBFIJDJABA@AEO@IFIJGFIDADQAMBIAGBAFCHCBEHCP@AIJIAGBCJIJAVBL@JDHCDAD@HTFD@DABBB@BFDDFDBCHBFFDHDBFNHDFHFCB@DFFFDBHDL@DDFJPJNFNNPFJJVCDAHEHAHDLHL@LDF@JBDLHHH@FCHBFLDJNANGDC@EFgGOADJAPHL@\\EHAFBDDB@DUBQ@@D@JHBBDAPDJFD@DFBBDAFCDECC@BHEDCFAPDHEJFJLBFHFLBBVDBDALBBPDPEJDDDVDFFDBHH@JCF@PDFJFJLBDCHKFMLGNIhDNALCJGHAHBDCFBDDDFXGNIDGAEJFHGLCNATBFDFDBDB@NBLHAHEHGD@H@DDJ@PFfLZRZ^PJRJbJ``\\^`\\HNNB`ALMFAJ@DJFAPEDDFAFCLQLEFANBH@RMPGJC\\IBA@GCM@IDCNEBC","@@MN@B@DB@DEFGHEC@","@@BEFC@G@AOJBHDB"]],"encodeOffsets":[[[113099,32082],[111725,31305],[111725,31320]]]},"properties":{"cp":[109.48699,30.283114],"name":"恩施土家族苗族自治州","childNum":3}},{"id":"429004","geometry":{"type":"MultiPolygon","coordinates":[["@@ICCBABEZADAFDD@FGDE@ACAEEA@NGVDPDL@PBNDBF@BDALGJAHBJDJBFITKHaLGLG^BJDHLJ@DWTMPKRERBFLNNVFNLFNN@HCD@DJ@FB@JCHEDKHCD@BBDBDLHBNDBNBDB@HAJGJGEE@@DC@IAACC@EHKHIIEAUHCD@BHDBFADIHEPA\\PVFDDCJCR\\BVALATIbWTEZDFAFI@CQe@KBGFEHAN@LDZPRHP@LCDCBEAGEOBEBEJIJSVIPUHAHBZ`FDHAPEJGJ]HEJARDZD¢DbA\\ETGRATHTDXCREPKNI\\AHCJIPKPCNFPAJCRWPGH@JDBVHFJ@LERQLCJBFF@\\FNLLJHNFVBHDHFDJB`DLTTP`JFFDVBFBRPDBFGDMNCDED@RTDBFADCFKBMNMAEIOCGGkIKHCXA`@VGNSZYJC^@RAIK@EHEZEN@PCDBBFXADA@CCGMQBIGIAAJUFGJCFEHCFE@CGE@CBKHO@CCA@EC@@A@A@ADBDOFEDAPAZHDABEAIGIGSAIAOCC]GACMOAGFGHEBCDIHE`K^MH@NDFAFKDEBKAOHMBGBQCEwCAIAEDCCE@AABCACIAAEAAEAOFEDCJG@EFOFE@EEAC@EFGAEGCCBMAICCGAOCIGI[EGDC@GCGMQGGAKDKFIHIBMEkGGBGCW@MCMGYCWGG@C@KDGBGCECGAIBMFIJAJBJDDGLKFOLGDMLOJAB@LCFCBCHCFEH@DBB@BONcNQTEB]@GDOLYNGFIJSJI@EAM@UDKAGGAKCGKOMM_O}Ia@WBE@IEE@G@SJK@KDgIOEM@}OOBM@EDIJMDGBiKIB]VOJCFO^CFMHMHG@MCCJCD","@@@AABB@","@@IIEA@FHBDHD@@A","@@@AA@@DB@","@@@CA@@D"]],"encodeOffsets":[[[115742,30921],[115691,31203],[115882,31168],[115693,31148],[116493,31026]]]},"properties":{"cp":[113.453974,30.364953],"name":"仙桃市","childNum":5}},{"id":"429005","geometry":{"type":"MultiPolygon","coordinates":[["@@MGEMMUKMAEFQLQNOXS@CKICGAIH]HKbKLGJSAECIAIBGHIBKACE@CAAM@OCKCOHU@MFBBFBDF@HC@ECCBEBCFYBADAJDBGAA@AHDBEICGG@GFM@CCCMCGEBGHS@CCEOEOKWGGBSJIAQEC@]RAHFPCFoNK@QCGBWPK@KCCD@BBN@FEHOFEACGIAMGEEKWGCGCgFGIEMBIP_@QCGGOECc@EACCFKHEHEVGPWÛ@AVYBeCQJM@GAI@UPEDiFKHaNKBcCOBKDIHCL@FFHXZ@ZKXMDIDEHCN@hJHGJKbWZOPKRc^KVGdA\\HZ@LBLATCDC@ADKHGPGD@JBFHFL@DBDHLFHFBHFHBFBPK`DLNNTJZ@XBRPBR@JDDBJGLHHADIDCBCCC@EVFZRbJFPODSBGDCNDPHRVBFCPEHSPCFCJDLLNFBHAPJAZBHNRHDDH@HADKFOJAH@DDDLCD@BDPKCABGHABBF@@Dn\\FA@FC@AF@BBP@DF@PENNF@FAJIVIN@KIkMOKGOCS@OBMHMFI\\]JIHAF@DDNVHHbJHBJAdIVHJFJ@F@FCLUFQJkFIHEN[NKPIjIXGL@NHJJDJ@L@NEPKZBVLT\\ZPFH@JCJGhSFIToHIECOUB[FOJGBCAEGC@ADCVGFBJJLGHKBBABFDHBFCFBFDHIBE@EAGQCA@AMMKAEDCLGFCDI@GEAI@@CDC@GAAKB@C","@@GBBCDAm[AFGCBDE@OLDFDDB@HEFAHDFTVLD@BCGKACBADANF","@@AA@BB@","@@II@J","@@FCBCEF"]],"encodeOffsets":[[[115693,31143],[115376,31363],[115691,31204],[115698,31148],[115742,30921]]]},"properties":{"cp":[112.896866,30.421215],"name":"潜江市","childNum":5}},{"id":"429006","geometry":{"type":"MultiPolygon","coordinates":[["@@^KPOV_NIHMX[PY@EC@@GAG@IAE@AJC@EKICOCAGCACBELELGDEDGA@NA@B[QA@ACA@@CFA@DDA@GH@@DKFaXQFBDABIDGJADACgKCIO@CBADGEABGM[KQCICQBeJCHEFEBAFQIWQ]BCHI@]DEHEfMBG@ME_@MGU@IFM@SDEAAAUICG@OHQXIDOBMEODOLIJGD[BMJOLQFWDSCSGQBSH[FaB¡CYCQCIBGFI^IHOFGBECOUAB@DC@CGGA@EB@@AIBOVUJITIJAFAFFPBHAFCDKDO@QGYOKCM@GBEFAH@LRf@DEJEBYCSFaXSJKBUB[AQIDKNSpEJ{`G@OE[YKSAULYFO@M@KCIIIMGK@WHiJOJMLM\\GFEJIlERKVEDE@I@IEUGcJIB]GKCGGMUCCE@GBehEJGNAN@PDTHPPLlNHFHHFPAFGJMFKDKAGAkO]G]CO@mROJYVAFBPXr@DTATDVJbbFLXNTPZPVTvbrZPJZLTVdXFDBAFCNC@GBIHADGDA@CAAHG@CEI@IHCDC@IJABAEKHMAGDIAAEBAACGDA@EDCEAJE@AEA@CBCFEBEI@EGCA@ACCBADBlGBCBCLCDCJCHIB@DBB@DADGLEH@J@FDAN@JJL\\ELBLDDHJVDJLHLJJFlRVN\\dFHJDTFHABAFGLKVEL@VFXBJ@JDFFFVANEPBLBJDFH@HAHAHITEhGPINCLA^JPJnHHFJJHPVZJNCFBBFHF@NIDABB@BD@HJADKJ@BHBPCDBDDHNNHBB@JRJFLVJNDHAB@@EHCBED@FH\\MPEF@FLBCPEAMBILOPANDBCACBCNABUBEHA","@@BCF@PDBEF@DCBIkHDFAB","@@AOISGEICCA@CDATBLCBCBI@SCCOA@KLAFRF@DG@IBACE@BICB@F@@RB@AN","@@NADECGOD","@@IIEA@BB@FFFF","@@DFDBBEAICAAGIOA@AFDLADHH"]],"encodeOffsets":[[[116095,31590],[115538,31467],[116163,31461],[115310,31448],[115883,31167],[116177,31240]]]},"properties":{"cp":[113.165862,30.653061],"name":"天门市","childNum":6}},{"id":"429021","geometry":{"type":"Polygon","coordinates":["@@LFJBPHTNJPRJ\\NNJHBT@ZA^BNCJEFORUVCXQFADDDF@VBBDDTF@HADBFELGF@DEDIFG@EFKBADBHFJJLdNHHBDBXCJEFQNMBN\\BLRlBNATFHHHRJdJJFNNJFh@TCdDbAdLLH@BCR@dBDFDHBZCNFJHHRHDL@HBT@HG@G@AXCJGD@ZNPBBBBHAR@B`NDBAFKHADBDLHJD`HHCJ@BA@KGMBAFCZFBDDLDBNAX@TEH@RBJEH@PHH@LGHAFBPJH@LGPFFBVKN@FBDDDRBFLF^MPCP@FGJCRCLCd@VCFEHODAFAHJNEBCFURO`gRM^BL@HAJGNOZaTUDG@CHIBKAGECACFIB@BCDAAGDGBMPYHSLGPEDKBEFAF@hFPJJ@DAHGNANKXGJOACCASAYmOSKMCK@EBIHKBW@CKGUCOIOEAAAGEQAKECGCU@EAECCMCCKGOEMKOKG@CBM\\KJIFAD@`EFCBMIKAAHKFQTI@MCGCWOQBMISBGGMGCGBGBIAIGKKIYgAIAAM@IBILCBCBQGO@aBSEI@M@KHODIACC@IDK@ICEKKBQAEOQCQCGKM@C@G@EQOAC@KDO@IIMEGICAEAIDGLMFKEOBGACMIQEOAGAGGC@IDEHKBEDAFBHAHGHIBIN@BDD@DDD@FEJGDEHIFADEAGEAIBOGGEWCGMIOGMBY@@JADMFCD@JDN@HAB[JIDOHQNG@MAEBKFKREDEBCCOFEBCII@EBKN_BMAGM_[[]__aIQIOIY]YQeKOEI@ECI@GHGFIDATCBKBCDBJFHDBBDAHSXAFFNMLEPBHHRALEF[FGDILAHBF@DCDC@IEEAMHUEODUC]BCBADABCJKHSR@BDD@DADIDSDYNIJCRINGFIFI@]ASIGAI@GBADGPBHJHFDPDDDDNBBVJHHBBTJNLLDNBNATGLFBDVLDHJHXLLBHJGP"],"encodeOffsets":[[112707,32322]]},"properties":{"cp":[110.671525,31.744449],"name":"神农架林区","childNum":1}}],"UTF8Encoding":true});
}));