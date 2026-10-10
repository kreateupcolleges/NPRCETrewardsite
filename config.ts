
import { BatchConfig } from './types';

/**
 * ============================================================================
 *  INSTITUTION CONFIGURATION
 *  Update this section to customize the portal for your college.
 * ============================================================================
 */
export const INSTITUTION_CONFIG = {
  // Display Name appearing in the Header
  name: "NPRCET Reward Points Site", 
  
  // URL to the college logo (Direct link to image)
logoUrl: "https://drive.google.com/file/d/1aZFIkfrtYixCaVsMeDAVHTTL5JUAj9sd/view?usp=sharing"
};

/**
 *  ADMIN AUTHENTICATION SHEET
 *  Sheet containing columns: Email Address, Password, Name, Department
 */
export const ADMIN_AUTH_CONFIG = {
  id: "1rMnQAaMMdXn_5GJtISZTQpNrLhxv29M61fbpfvu25UE",
  name: "Admin_Credentials"
};

/**
 *  ELITE STUDENT AUTHENTICATION SHEET
 *  Sheet containing columns: Email Address, Name, Register No, Department, Password
 */
export const ELITE_AUTH_CONFIG = {
  id: "1pqjpslJokcT1wtNNq-MraMLzgU_KmUCbuZ5674YBkqk",
  name: "NPR_ELITE_2025-2029_BATCH" 
};


/**
 * ============================================================================
 *  ACADEMIC DATA CONFIGURATION
 *  Manage Sheets, Batches, and Subject Definitions here.
 * ============================================================================
 */

export const BATCHES: BatchConfig[] = [
  // --------------------------------------------------------------------------
  // BATCH 1: 2025 - 2028 (1st Year)
  // --------------------------------------------------------------------------
  {
    id: 'batch-2025-2028',
    label: 'Batch 2025 - 2029 (2nd Year)',
    semesters: {
      "1": { 
        label: "Semester 3", 
        internals: ["IP1", "IP2"],
        
        // --- SEMESTER 1 SHEETS ---
        rewardSheets: {
          IP1: { id: "1iNVolZsurvADA7snlC0WXh9pAO4snrhdsOydm22ngH8", name: "NPR_2025-2029_All_S3_IP1_RewardSplit" }
          // IP2: { id: "1cJc1Vc2PSAo6hUlGJSX_8R4jUnjzHA", name: "RCS_1styear_IP2_RewardsSplit" }
        },
        
        internalMarksSheets: {
          IP1: {
           "Mech": { id: "1A2IY0Bmhi8w2fNS09QBqGLYVoWEZdeNYi7tpUaeG8", name: "Mech" },
            "Civil": { id: "1L5jCxRzAXog7c3iSeaGIMsvK9vlwcdsSSajF6wxyM", name: "Civil" },
            "AI & DS": { id: "1z762IlhhwdcG2a35xgcYwMnL-FQjr6XfV5RJYB5AY", name: "AI & DS" },
            "CSE": { id: "1REuPIWlOw4h4Cvm972SEo_hToVf-6rvbkSXEtcpcg", name: "CSE" },
            "ECE": { id: "19GxBFxqhDz_V4bWN0obscX9JYNGMTw4xxw4nIrDbw", name: "ECE" },
            "EEE": { id: "12HRmLMHE3MWSLtMPy2n3PcjEZg_Bd31aebcx2MSpg", name: "EEE" },
            "IT": { id: "11rRp4XdYhB-KvSqmsa_n0dXKaCC_7EJ8YZStye3Quo", name: "IT" },
            "AI & ML": { id: "1_p0lPWsXTzfNb2P5GB_ZV_O5nN6RSXZcKfvag7-Qzo", name: "AI & ML" },
            "Cyber Security": { id: "12DIMQGgbmBx50exjj-rV4MZgG4rnhR0XPjly9w_6w", name: "Cyber Security" }
          }
          // IP2: {
          //   "B.Sc  AIML": { id: "1eHcJZfwa8DaQLH_mxp4", name: "B.Sc  AIML" },
          //   "B.Sc  CS with AI": { id: "1Z1iK7UpChhf4p5oDar2mhStX96s", name: "B.Sc  CS with AI" },
          //   "B.Sc CS": { id: "1w-9Nxy6X1pMTBU8YTOXozsU", name: "B.Sc CS" },
          //   "B.Sc DCFS": { id: "1sUdFzj8_LXMntv6tQgjy94rM", name: "B.Sc DCFS" },
          //   "B.Sc DS": { id: "1usnswuhn5chnx58-XioTEk", name: "B.Sc DS" },
          //   "B.Sc DSA": { id: "1v_ucgOpVWSYV50Z1Kiln_r593pg", name: "B.Sc DSA" },
          //   "B.Sc IT": { id: "1BZ9VS712RmFe9X8HKAzoacym4", name: "B.Sc IT" }
          // }
        },

        // --- SEMESTER 1 SUBJECTS ---
        subjectConfig: {
          defaultMaxMarks: {
            Theory: 8,
            Lab: 10,
            "Lab+Theory": 10
          },
          departments: {
"Civil": [
    { code: "25MA301", type: "Theory" },
    { code: "25CE301", type: "Theory" },
    { code: "25CE302", type: "Theory" },
    { code: "25CE303", type: "Theory" },
    { code: "25CE304", type: "Theory" },
    { code: "25CE305", type: "Theory" },
    { code: "25CE311", type: "Lab" },
    { code: "25CE312", type: "Lab" },
    { code: "25CE313", type: "Lab" }
  ],

  "CSE": [
    { code: "25MA302", type: "Theory" },
    { code: "25IT301", type: "Lab+Theory" },
    { code: "25CS301", type: "Lab+Theory" },
    { code: "25CS302", type: "Lab+Theory" },
    { code: "25AD301", type: "Lab+Theory" },
    { code: "25HSC01", type: "Theory" }
  ],

  "ECE": [
    { code: "25MA303", type: "Theory" },
    { code: "25AI301", type: "Theory" },
    { code: "25EC301", type: "Theory" },
    { code: "25EC302", type: "Lab+Theory" },
    { code: "25EC303", type: "Theory" },
    { code: "25HSC01", type: "Theory" },
    { code: "25AI311", type: "Lab" }
  ],

  "EEE": [
    { code: "25MAC01", type: "Theory" },
    { code: "25EE301", type: "Lab+Theory" },
    { code: "25EE302", type: "Lab+Theory" },
    { code: "25EE303", type: "Lab+Theory" },
    { code: "25EE304", type: "Theory" },
    { code: "25IT303", type: "Theory" }
  ],

  "Mech": [
    { code: "25MA301", type: "Theory" },
    { code: "25ME301", type: "Theory" },
    { code: "25ME302", type: "Theory" },
    { code: "25ME303", type: "Theory" },
    { code: "25HSC01", type: "Theory" },
    { code: "25ME311", type: "Lab" },
    { code: "25ME312", type: "Lab" },
    { code: "25ME313", type: "Lab" }
  ],

  "AI & ML": [
    { code: "25MA302", type: "Theory" },
    { code: "25IT301", type: "Lab+Theory" },
    { code: "25CS301", type: "Lab+Theory" },
    { code: "25CS302", type: "Lab+Theory" },
    { code: "25AD301", type: "Lab+Theory" },
    { code: "25HSC01", type: "Theory" }
  ],

  "AI & DS": [
    { code: "25MA302", type: "Theory" },
    { code: "25AD301", type: "Lab+Theory" },
    { code: "25IT301", type: "Lab+Theory" },
    { code: "25CS301", type: "Lab+Theory" },
    { code: "25AD302", type: "Lab+Theory" },
    { code: "25HSC01", type: "Theory" }
  ],

  "IT": [
    { code: "25MA302", type: "Theory" },
    { code: "25IT301", type: "Lab+Theory" },
    { code: "25IT302", type: "Lab+Theory" },
    { code: "25CS301", type: "Lab+Theory" },
    { code: "25AD301", type: "Lab+Theory" },
    { code: "25HSC01", type: "Theory" }
  ],

  "Cyber Security": [
    { code: "25MA302", type: "Theory" },
    { code: "25IT301", type: "Lab+Theory" },
    { code: "25CS301", type: "Lab+Theory" },
    { code: "25CS302", type: "Lab+Theory" },
    { code: "25AD301", type: "Lab+Theory" },
    { code: "25HSC01", type: "Theory" }
  ]
          }
  }
   } 
   }
  },

        // --- END SEMESTER 1 ---
              // ============================================================
      // SEMESTER 2 (NEW — SAMPLE DATA, CHANGE SHEET IDs)
      // ============================================================

  //     "2": {

  //       label: "Semester 2",

  //       internals: ["IP1", "IP2"],

  //       rewardSheets: {

  //         IP1: {
  //           id: "1cByligzZTzKQQgJA1KTkiEHT1ggeFLibdoFJdHXI4Bw",
  //           name: "Semester2_IP1_Rewards"
  //         },

  //         IP2: {
  //           id: "PASTE_SEM2_IP2_REWARD_SHEET_ID",
  //           name: "Semester2_IP2_Rewards"
  //         }

  //       },


  //       internalMarksSheets: {

  //       IP1: {
  //           "B.Sc  AIML": { id: "1fX3C0pqWoJ1NtxpH2TT8kRCrJwOZnQ1IumxifGgnr8Q", name: "B.Sc  AIML" },
  //           "B.Sc  CS with AI": { id: "14a6Wad24n2yGvuuJE1W8qMkvKqzbG9C24dGrnmaJZMI", name: "B.Sc  CS with AI" },
  //           "B.Sc CS": { id: "134Xxcovbetu9Ftp0byVoHlcVUNlz6t6OKpnbKI1ISHw", name: "B.Sc CS" },
  //           "B.Sc DCFS": { id: "1j9EYqC52mTdVymkuSpphqVJJ_Tb1xFVwc2U2oBO_mLY", name: "B.Sc DCFS" },
  //           "B.Sc DS": { id: "1iWG670KusT54z5nj_UoWldhsm9XJGmf4w-rmjPwEfoc", name: "B.Sc DS" },
  //           "B.Sc DSA": { id: "1toZUWr1dfEknSrWIl65FLyV24VnXs5nzXVFQJBHs9VY", name: "B.Sc DSA" },
  //           "B.Sc IT": { id: "1yFS1h8Xd3c0JozHspL81sDdj6iIm0yriqCg0FewlteM", name: "B.Sc IT" }
  //         },


  //         IP2: {

  //           "B.Sc CS": {
  //             id: "PASTE_SEM2_IP2_CS_INTERNAL_SHEET_ID",
  //             name: "B.Sc CS"
  //           },

  //           "B.Sc IT": {
  //             id: "PASTE_SEM2_IP2_IT_INTERNAL_SHEET_ID",
  //             name: "B.Sc IT"
  //           }

  //         }

  //       },


  //       subjectConfig: {

  //         defaultMaxMarks: {
  //           Theory: 15,
  //           Lab: 15,
  //           "Lab + Theory": 15
  //         },

  //         departments: {

  //           "B.Sc CS": [
  //   { code: "25BCS2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BCS2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ],

  // "B.Sc  CS with AI": [
  //   { code: "25BAR2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BAR2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BAR2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BAR2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ],

  // "B.Sc  AIML": [
  //   { code: "25BAM2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BAM2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BAM2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BAM2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ],

  // "B.Sc DSA": [
  //   { code: "25BDA2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDA2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BDA2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDA2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ],

  // "B.Sc DS": [
  //   { code: "25BDS2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDS2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BDS2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDS2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ],

  // "B.Sc IT": [
  //   { code: "25BIT2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BIT2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BIT2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BIT2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
    
  // ],
  // "B.Sc DCFS": [
  //   { code: "25BDC2CA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDC2CP", type: "Lab", maxMarks: 15 },
  //   { code: "25BDC2AA", type: "Theory", maxMarks: 15 },
  //   { code: "25BDC2EA", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS21T", type: "Theory", maxMarks: 15 },
  //   { code: "25BCS22E", type: "Theory", maxMarks: 15 }
  // ]
  //         }

  //       }


  // ============================================================================
  //  INSTRUCTIONS FOR ADDING A NEW BATCH
  //  1. Copy the entire block below (starting from { id: 'batch-2024-2027', ... }).
  //  2. Paste it at the top or bottom of the BATCHES array.
  //  3. Update the 'id' (must be unique) and 'label'.
  //  4. Define the 'semesters' relevant for that batch (e.g., Semester 3, 4).
  //  5. Update the Sheet IDs and Subject Configs for that specific batch.
  // ============================================================================

  // --------------------------------------------------------------------------
  // BATCH 2: 2024 - 2027 (2nd Year) - DUMMY DATA EXAMPLE
  // --------------------------------------------------------------------------
  {
    id: 'batch-2024-2028',
    label: 'Batch 2024 - 2028 (3rd Year)',
    semesters: {
      "1": { 
        label: "Semester 5", 
        internals: ["IP1", "IP2"],
        
        // Reward Sheets for 2nd Year (using dummy IDs from 1st year for demo)
        rewardSheets: {
          "IP1": { id: "11ojcMSPJV_toYD5ARi6yqV4pqvFVHFpcVKVndnBv-rM", name: "NPR_2024-2028_All_S5_IP1_RewardSplit" }
          // "IP2": { id: "1cJc1Vc2PSR4jUnjzHA", name: "RCS_1styear_IP2_RewardsSplit" }
        },
        
        // Internal Marks for 2nd Year
        internalMarksSheets: {
          IP1: {
           "Mech": { id: "166J_m6K7r5A-S2Q8mrfH7hmKz1tA69vIKHZ4UASEA", name: "Mech" },
          "Civil": { id: "10MSpdiybH44FSDHTtyuVMuaW6ki_j3fV4Z3h0n3ZM", name: "Civil" },
          "AI & DS": { id: "1XKAgE-1tYeBpweH9peN0o3OwtxSYI_qifXnvYewg4", name: "AI & DS" },
          "CSE": { id: "11z4MMgI8DOlQCKFxe0Ltp66vh4HUHNTLGYk1wZlYo", name: "CSE" },
          "ECE": { id: "1VnqCIjSAo_qNfTs6EkKrfl1LYpJopyRt1aQmxkOmAw", name: "ECE" },
          "EEE": { id: "1ehzA3Uab3xwPRU8cgNRpxpIQ8EkiwvMMVHXK8o_a5Q", name: "EEE" },
          "IT": { id: "16yAZQ7jMisKDtCmp2S4Lm7-Vh5g7VOCbvGg4i7wv0g", name: "IT" },
          "AI & ML": { id: "1xVoxuki1pfmVyu_3gud5CEazDk_d0Fxqm9d8Ga97g", name: "AI & ML" }
          }
        },

        // Subjects for 2nd Year, Semester 3
        subjectConfig: {
          defaultMaxMarks: {
            Theory: 8,
            Lab: 10,
            "Lab+Theory": 10
          },
          departments: {
  "Civil": [
    { code: "23CE501", type: "Theory" },
    { code: "23CE502", type: "Theory" },
    { code: "23CE503", type: "Theory" },
    { code: "23PCE04", type: "Theory" },
    { code: "23PCE30", type: "Theory" },
    { code: "23OHS01", type: "Theory" }
  ],

  "CSE": [
    { code: "23CS501", type: "Lab+Theory" },
    { code: "23CS902", type: "Theory" },
    { code: "23CS503", type: "Lab+Theory" },
    { code: "23OEC02", type: "Theory" },
    { code: "23PIT05", type: "Lab+Theory" },
    { code: "23CS905", type: "Lab+Theory" }
  ],

  "ECE": [
    { code: "23EC501", type: "Lab+Theory" },
    { code: "23EC502", type: "Theory" },
    { code: "23EC503", type: "Theory" },
    { code: "23EC504", type: "Theory" },
    { code: "23PEC12", type: "Theory" },
    { code: "23OME10", type: "Theory" },
    { code: "23EC511", type: "Lab" },
    { code: "23EC512", type: "Lab" }
  ],

  "EEE": [
    { code: "23EE501", type: "Theory" },
    { code: "23EE502", type: "Theory" },
    { code: "23EE503", type: "Lab+Theory" },
    { code: "23OME01", type: "Theory" },
    { code: "23PEE07", type: "Theory" },
    { code: "23EE511", type: "Lab" },
    { code: "23EE512", type: "Lab" }
  ],

  "Mech": [
    { code: "23ME501", type: "Theory" },
    { code: "23ME502", type: "Theory" },
    { code: "23ME503", type: "Theory" },
    { code: "23PME59", type: "Theory" },
    { code: "23PME67", type: "Theory" },
    { code: "23OEE03", type: "Theory" },
    { code: "23ME512", type: "Lab" },
    { code: "23ME513", type: "Lab" }
  ],

  "AI & ML": [
    { code: "23AL501", type: "Lab+Theory" },
    { code: "23AL502", type: "Lab+Theory" },
    { code: "23CS902", type: "Theory" },
    { code: "23OEC02", type: "Theory" },
    { code: "23PAD02", type: "Lab+Theory" },
    { code: "23PIT04", type: "Lab+Theory" }
  ],

  "AI & DS": [
  { code: "23AD501", type: "Lab+Theory" },
  { code: "23AD502", type: "Theory" },
  { code: "23CS903", type: "Lab+Theory" },
  { code: "23OEC02", type: "Theory" },
  { code: "23PAD902", type: "Lab+Theory" },
  { code: "23PIT04", type: "Lab+Theory" }
],

"IT": [
  { code: "23CS501", type: "Lab+Theory" },
  { code: "23AD503", type: "Lab+Theory" },
  { code: "23IT501", type: "Lab+Theory" },
  { code: "23OEC02", type: "Theory" },
  { code: "23CS905", type: "Lab+Theory" },
  { code: "23PIT04", type: "Lab+Theory" }
]
          }
        }
      }
    }
  }
];

export const CATEGORY_CODES = ['CD', 'PCDP', 'SM', 'AC', 'RPA', 'SPL', 'OT'];
export const SYSTEM_HEADER_LABELS = ["email address", "name", "register no", "department", "total"];
