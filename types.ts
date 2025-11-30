import React from 'react';

export interface DonationTier {
  amount: number;
  label: string;
  description: string;
  icon?: React.ReactNode;
}

export interface BlessingResponse {
  blessing: string;
}