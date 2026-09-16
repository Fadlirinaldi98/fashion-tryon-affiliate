import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Share } from 'react-native';

export default function AffiliateScreen() {
  const [referralCode] = useState('FASHION2024ABC');
  const [earnings] = useState(450000);
  const [sales] = useState(12);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Coba aplikasi Fashion Try-On! Gunakan kode referral saya: ${referralCode} dan dapatkan diskon 10%!`,
        url: 'https://fashiontryon.com/download',
        title: 'Fashion Try-On - Virtual Try-On Fashion',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const copyToClipboard = () => {
    alert(`Kode referral ${referralCode} disalin!`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Program Affiliate</Text>
        <Text style={styles.subtitle}>Dapatkan komisi dari setiap penjualan</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>Rp {earnings.toLocaleString('id-ID')}</Text>
          <Text style={styles.statLabel}>Total Penghasilan</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{sales}</Text>
          <Text style={styles.statLabel}>Penjualan Bulan Ini</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kode Referral Anda</Text>
        <View style={styles.referralBox}>
          <Text style={styles.referralCode}>{referralCode}</Text>
          <TouchableOpacity 
            style={styles.copyButton}
            onPress={copyToClipboard}
          >
            <Text style={styles.copyButtonText}>Salin</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bagikan ke Teman</Text>
        <TouchableOpacity 
          style={styles.shareButton}
          onPress={handleShare}
        >
          <Text style={styles.shareButtonText}>📤 Bagikan Sekarang</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bagaimana Cara Kerjanya?</Text>
        
        <View style={styles.stepCard}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>1</Text>
          </View>
          <View>
            <Text style={styles.stepTitle}>Bagikan Kode Referral</Text>
            <Text style={styles.stepDesc}>Bagikan kode referral Anda kepada teman</Text>
          </View>
        </View>

        <View style={styles.stepCard}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>2</Text>
          </View>
          <View>
            <Text style={styles.stepTitle}>Teman Mendaftar</Text>
            <Text style={styles.stepDesc}>Teman menggunakan kode Anda saat membeli</Text>
          </View>
        </View>

        <View style={styles.stepCard}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>3</Text>
          </View>
          <View>
            <Text style={styles.stepTitle}>Dapatkan Komisi</Text>
            <Text style={styles.stepDesc}>Anda mendapat 15% dari nilai pembelian</Text>
          </View>
        </View>

        <View style={styles.stepCard}>
          <View style={styles.stepNumber}>
            <Text style={styles.stepNumberText}>4</Text>
          </View>
          <View>
            <Text style={styles.stepTitle}>Pencairan Dana</Text>
            <Text style={styles.stepDesc}>Cairkan penghasilan Anda setiap bulan</Text>
          </View>
        </View>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>💡 Tips Meningkatkan Penjualan</Text>
        <Text style={styles.infoText}>• Bagikan ke teman dan keluarga</Text>
        <Text style={styles.infoText}>• Post di media sosial Anda</Text>
        <Text style={styles.infoText}>• Buat konten review produk</Text>
        <Text style={styles.infoText}>• Ajak influencer teman Anda</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF6B6B',
    padding: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 15,
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  referralBox: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  referralCode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
    letterSpacing: 2,
  },
  copyButton: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  copyButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  shareButton: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  stepCard: {
    flexDirection: 'row',
    marginBottom: 15,
    gap: 12,
  },
  stepNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FF6B6B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  stepTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  stepDesc: {
    fontSize: 12,
    color: '#666',
  },
  infoBox: {
    backgroundColor: '#fffbf0',
    margin: 20,
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B6B',
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 13,
    color: '#666',
    marginBottom: 5,
  },
});
