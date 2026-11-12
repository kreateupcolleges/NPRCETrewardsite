
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
    id: 'batch-2025-2029',
    label: 'Batch 2025 - 2029 (2nd Year)',
    semesters: {
      "1": { 
        label: "Semester 3", 
        internals: ["IP1", "IP2"],
        
        // --- SEMESTER 1 SHEETS ---
        rewardSheets: {
          IP1: { id: "1iNVolZsurvADA7snlC0WXh9pAO4snrhdsOydm22ngH8", name: "NPR_2025-2029_All_S3_IP1_RewardSplit" },
          IP2: { id: "1ScJF5MADioyleKvAwj8ufTqHYY_g6W7hyyjjavKJXi8", name: "NPR_2025-2029_All_S3_IP2_RewardSplit" }
        },
        
        internalMarksSheets: {
          IP1: {
           "Mech": { id: "1V64uVTJyDzmg-XE6z_O3PIONyHNyIWpnbW8DPzaW6es", name: "Mech" },
            "Civil": { id: "1w4oACBCUIyEaAGqYmCSkbBZGkDuSDVD85XehJA92OPQ", name: "Civil" },
            "AI & DS": { id: "1jss_GIJkB-uYshxoVd5MDiOMe_BtNcn5qHpCchvPNqk", name: "AI & DS" },
            "CSE": { id: "10e9KmgjrX_7kH1jWK7SUeimlLD8WBAWzB3TLQ5RzyUA", name: "CSE" },
            "ECE": { id: "1eB0w6zidPQTw5DCOxEpRO_0bs-QY21ArxLyNCT3eOS", name: "ECE" },
            "EEE": { id: "1wAbv5EZcxuK46GWugNV7z2M3K8A0n5v2BtQCdiT03yI", name: "EEE" },
            "IT": { id: "1cfvqFwnrgFquDRAl6K9xJAID2rs9br3TrM70Md5xxRE", name: "IT" },
            "AI & ML": { id: "1AK4VyJbDbGPKR3OAjJMtzKX5l1Y0Eb7fLUzeArGTtoY", name: "AI & ML" },
            "Cyber Security": { id: "1sPMQ-ZR8YqVv-5YZHFXuP1wITQ3wgiHH4JUSWCfYOmQ", name: "Cyber Security" }
          },
          IP2: {
           "Mech": { id: "1r9fP2MYiwM-j8PItWs3e5Pw5opVApVVNJSieYVsTjmA", name: "Mech" },
            "Civil": { id: "1GoUOUCq9FY7kSLYVK2hzo0GuaAVoUT2DW7uYFONNtWs", name: "Civil" },
            "AI & DS": { id: "1eqI4OrWRmHiBToLcdoyZbRLOF9DhBi5KWJkH1vfnbWQ", name: "AI & DS" },
            "CSE": { id: "1Pu_4J7aTGkb797UoOzjNV0uxSF2d4K_8tDVa1-Of_PY", name: "CSE" },
            "ECE": { id: "1omRrbSclLpZvKUQlLCdERI2OB-U_U1v0cPywt6xPOAQ", name: "ECE" },
            "EEE": { id: "10THxNeF4LvTcoNartlst-ichYJpuRw1NOAAkDMjc_sg", name: "EEE" },
            "IT": { id: "1m5P1SI8Vwtn7EoMKq_UsxyqgK5LBIGpjTEvT3JbDo-E", name: "IT" },
            "AI & ML": { id: "1zaW0HIIvxd9F_Plfu85peBx1E0ZHoMPOdVovEpi4BeU", name: "AI & ML" },
            "Cyber Security": { id: "1UCnUfp_RfZzfB3hmL6Hcht_hRGn3ZXQcznshw2YWOWE", name: "Cyber Security" }
          }
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
    { "code": "25MA301", "type": "Theory", "maxMarks": 8 },
    { "code": "25CE301", "type": "Theory", "maxMarks": 8 },
    { "code": "25CE302", "type": "Theory", "maxMarks": 8 },
    { "code": "25CE303", "type": "Theory", "maxMarks": 8 },
    { "code": "25CE304", "type": "Theory", "maxMarks": 8 },
    { "code": "25CE305", "type": "Theory", "maxMarks": 8 },
    { "code": "25CE311", "type": "Lab", "maxMarks": 10 },
    { "code": "25CE312", "type": "Lab", "maxMarks": 10 },
    { "code": "25CE313", "type": "Lab", "maxMarks": 10 }
  ],
  "CSE": [
    { "code": "25MA302", "type": "Theory", "maxMarks": 8 },
    { "code": "25IT301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25CS301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25CS302", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25AD301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25HSC01", "type": "Theory", "maxMarks": 8 }
  ],
  "ECE": [
    { "code": "25MA303", "type": "Theory", "maxMarks": 8 },
    { "code": "25AI301", "type": "Theory", "maxMarks": 8 },
    { "code": "25EC301", "type": "Theory", "maxMarks": 8 },
    { "code": "25EC302", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25EC303", "type": "Theory", "maxMarks": 8 },
    { "code": "25HSC01", "type": "Theory", "maxMarks": 8 },
    { "code": "25AI311", "type": "Lab", "maxMarks": 10 }
  ],
  "EEE": [
    { "code": "25MAC01", "type": "Theory", "maxMarks": 8 },
    { "code": "25EE301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25EE302", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25EE303", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25EE304", "type": "Theory", "maxMarks": 8 },
    { "code": "25IT303", "type": "Theory", "maxMarks": 8 }
  ],
  "Mech": [
    { "code": "25MA301", "type": "Theory", "maxMarks": 8 },
    { "code": "25ME301", "type": "Theory", "maxMarks": 8 },
    { "code": "25ME302", "type": "Theory", "maxMarks": 8 },
    { "code": "25ME303", "type": "Theory", "maxMarks": 8 },
    { "code": "25HSC01", "type": "Theory", "maxMarks": 8 },
    { "code": "25ME311", "type": "Lab", "maxMarks": 10 },
    { "code": "25ME312", "type": "Lab", "maxMarks": 10 },
    { "code": "25ME313", "type": "Lab", "maxMarks": 10 }
  ],
  "AI & ML": [
    { "code": "25MA302", "type": "Theory", "maxMarks": 8 },
    { "code": "25IT301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25CS301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25CS302", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25AD301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25HSC01", "type": "Theory", "maxMarks": 8 }
  ],
  "AI & DS": [
    { "code": "25MA302", "type": "Theory", "maxMarks": 8 },
    { "code": "25AD301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25IT301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25CS301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25AD302", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25HSC01", "type": "Theory", "maxMarks": 8 }
  ],
  "IT": [
    { "code": "25MA302", "type": "Theory", "maxMarks": 8 },
    { "code": "25IT301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25IT302", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25CS301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25AD301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25HSC01", "type": "Theory", "maxMarks": 8 }
  ],
  "Cyber Security": [
    { "code": "25MA302", "type": "Theory", "maxMarks": 8 },
    { "code": "25IT301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25CS301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25CS302", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25AD301", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "25HSC01", "type": "Theory", "maxMarks": 8 }
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
          "IP1": { id: "11ojcMSPJV_toYD5ARi6yqV4pqvFVHFpcVKVndnBv-rM", name: "NPR_2024-2028_All_S5_IP1_RewardSplit" },
          "IP2": { id: "1mymK1Cmx1iEe_ts-5H33iNEGptxrHM3sz624SBRehxU", name: "NPR_2024-2028_All_S5_IP2_RewardSplit" }
        },
        
        // Internal Marks for 2nd Year
        internalMarksSheets: {
          IP1: {
           "Mech": { id: "1f7pAqL0fsCarCtU9gj8ROSAow8d5bxfG0KBq1XiXx8g", name: "Mech" },
          "Civil": { id: "1qaUD1VAdSVVkgEie_nqIHAz-ZmsYTTmDV6CEprm--7k", name: "Civil" },
          "AI & DS": { id: "15LN6-z8PfDb7ZMlkl5_zJRGtoXsfE-rURnwCmv_TPTY", name: "AI & DS" },
          "CSE": { id: "1sqw1XdZBB7tfMvyApR08IbNkP7QAxO3n5a773DrjsV8", name: "CSE" },
          "ECE": { id: "17QrpfHm9tkXM8cF0YH6nre3MxXYXL-GZu5vJ1JdW10w", name: "ECE" },
          "EEE": { id: "1Umlq_f69SIKqoqVar4Zixe9GbKCLzQYUAaDlbV0wU_E", name: "EEE" },
          "IT": { id: "1rRHPhDeeX_NVy_fEk_HkGlgW3MhgNa7qvccqGHuvLXQ", name: "IT" },
          "AI & ML": { id: "1NqCovqpzmEsShq9zqja4byFfqgibs7Z8nTyg2rwREKA", name: "AI & ML" }
          },
          IP2: {
           "Mech": { id: "1HZR2TgvUh_sScSZxbI4kigPIUUXdsLA8sOS0UlDyeoI", name: "Mech" },
          "Civil": { id: "1QesmTW43Xum1XOiCAGdRoD76ef-t7kzlx2Dv09lyd7E", name: "Civil" },
          "AI & DS": { id: "10IlFz0v5WSQb7eV_U54Z3oEwMAq-r1MchFTvJQD1pW8", name: "AI & DS" },
          "CSE": { id: "1A_VcafTcNMdH9x-Uw1aLmO3yLRJCSw2uPbp2jWug_9Q", name: "CSE" },
          "ECE": { id: "1QQ026zCql49bBG6M7nzPuuS67X-lTohkLV_VIkJY8xU", name: "ECE" },
          "EEE": { id: "18WXqlImtZJJtBKw2Ixx6s241gz77w3s9qltwdqsT5jw", name: "EEE" },
          "IT": { id: "1wIzmBKB7H3cStAowL-WgWfI0WzexeH_9Tl-IwbZX5d4", name: "IT" },
          "AI & ML": { id: "1rZhouT-nZO0FE9-EbRodorSAFDq7XBrfhMH5nSp7h3E", name: "AI & ML" }
          }
        },

        // Subjects for 3rd Year, Semester 5
        subjectConfig: {
          defaultMaxMarks: {
            Theory: 8,
            Lab: 10,
            "Lab+Theory": 10
          },
          departments: {
 "Civil": [
    { "code": "23CE501", "type": "Theory", "maxMarks": 8 },
    { "code": "23CE502", "type": "Theory", "maxMarks": 8 },
    { "code": "23CE503", "type": "Theory", "maxMarks": 8 },
    { "code": "23PCE04", "type": "Theory", "maxMarks": 8 },
    { "code": "23CE511", "type": "Lab", "maxMarks": 10 },
    { "code": "23PCE30", "type": "Theory", "maxMarks": 8 },
    { "code": "23OHS01", "type": "Theory", "maxMarks": 8 }
  ],
  "CSE": [
    { "code": "23CS501", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23CS902", "type": "Theory", "maxMarks": 8 },
    { "code": "23CS503", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23OEC02", "type": "Theory", "maxMarks": 8 },
    { "code": "23PIT05", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23CS905", "type": "Lab+Theory", "maxMarks": 10 }
  ],
  "ECE": [
    { "code": "23EC501", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23EC502", "type": "Theory", "maxMarks": 8 },
    { "code": "23EC503", "type": "Theory", "maxMarks": 8 },
    { "code": "23EC504", "type": "Theory", "maxMarks": 8 },
    { "code": "23PEC12", "type": "Theory", "maxMarks": 8 },
    { "code": "23OME10", "type": "Theory", "maxMarks": 8 },
    { "code": "23EC511", "type": "Lab", "maxMarks": 10 },
    { "code": "23EC512", "type": "Lab", "maxMarks": 10 }
  ],
  "EEE": [
    { "code": "23EE501", "type": "Theory", "maxMarks": 8 },
    { "code": "23EE502", "type": "Theory", "maxMarks": 8 },
    { "code": "23EE503", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23OME01", "type": "Theory", "maxMarks": 8 },
    { "code": "23PEE07", "type": "Theory", "maxMarks": 8 },
    { "code": "23EE511", "type": "Lab", "maxMarks": 10 },
    { "code": "23EE512", "type": "Lab", "maxMarks": 10 }
  ],
  "Mech": [
    { "code": "23ME501", "type": "Theory", "maxMarks": 8 },
    { "code": "23ME502", "type": "Theory", "maxMarks": 8 },
    { "code": "23ME503", "type": "Theory", "maxMarks": 8 },
    { "code": "23PME59", "type": "Theory", "maxMarks": 8 },
    { "code": "23PME67", "type": "Theory", "maxMarks": 8 },
    { "code": "23OEE03", "type": "Theory", "maxMarks": 8 },
    { "code": "23ME512", "type": "Lab", "maxMarks": 10 },
    { "code": "23ME513", "type": "Lab", "maxMarks": 10 }
  ],
  "AI & ML": [
    { "code": "23AL501", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23AL502", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23CS902", "type": "Theory", "maxMarks": 8 },
    { "code": "23OEC02", "type": "Theory", "maxMarks": 8 },
    { "code": "23PAD02", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23PIT04", "type": "Lab+Theory", "maxMarks": 10 }
  ],
  "AI & DS": [
    { "code": "23AD501", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23AD502", "type": "Theory", "maxMarks": 8 },
    { "code": "23CS903", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23OEC02", "type": "Theory", "maxMarks": 8 },
    { "code": "23PAD902", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23PIT04", "type": "Lab+Theory", "maxMarks": 10 }
  ],
  "IT": [
    { "code": "23CS501", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23AD503", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23IT501", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23OEC02", "type": "Theory", "maxMarks": 8 },
    { "code": "23CS905", "type": "Lab+Theory", "maxMarks": 10 },
    { "code": "23PIT04", "type": "Lab+Theory", "maxMarks": 10 }
  ]
          }
        }
      }
    }
  }
];

export const CATEGORY_CODES = ['CD', 'PCDP', 'SM', 'AC', 'RPA', 'SPL', 'OT'];
export const SYSTEM_HEADER_LABELS = ["email address", "name", "register no", "department", "total"];
