import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';

export default function ProfileScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [user] = useState({
    name: 'Fadli Rinaldi',
    email: 'fadli@example.com',
    phone: '+62 812 3456 7890',
    joinDate: '15 Januari 2024',
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>FR</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informasi Pribadi</Text>
        
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Nama</Text>
          <Text style={styles.infoValue}>{user.name}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoValue}>{user.email}</Text>
          <TouchableOpacity style={styles.verifyButton}>
            <Text style={styles.verifyButtonText}>Verifikasi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Nomor Telepon</Text>
          <Text style={styles.infoValue}>{user.phone}</Text>
        </View>

        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Tanggal Bergabung</Text>
          <Text style={styles.infoValue}>{user.joinDate}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pengaturan</Text>
        
        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Notifikasi Push</Text>
            <Text style={styles.settingDesc}>Terima notifikasi penjualan</Text>
          </View>
          <Switch 
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            trackColor={{ false: '#ccc', true: '#FF6B6B' }}
            thumbColor='#fff'
          />
        </View>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Privasi Akun</Text>
            <Text style={styles.settingDesc}>Kelola pengaturan privasi</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.settingItem}>
          <View>
            <Text style={styles.settingLabel}>Keamanan</Text>
            <Text style={styles.settingDesc}>Ubah password dan 2FA</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bantuan & Dukungan</Text>
        
        <TouchableOpacity style={styles.helpItem}>
          <Text style={styles.helpItemText}>❓ Pertanyaan Umum (FAQ)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.helpItem}>
          <Text style={styles.helpItemText}>💬 Hubungi Kami</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.helpItem}>
          <Text style={styles.helpItemText}>📋 Syarat & Ketentuan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.helpItem}>
          <Text style={styles.helpItemText}>🔒 Kebijakan Privasi</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Versi 1.0.0</Text>
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
    padding: 30,
    alignItems: 'center',
    paddingTop: 40,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  infoItem: {
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  verifyButton: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  verifyButtonText: {
    fontSize: 12,
    color: '#FF6B6B',
    fontWeight: '600',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 3,
  },
  settingDesc: {
    fontSize: 12,
    color: '#999',
  },
  arrow: {
    fontSize: 24,
    color: '#999',
  },
  helpItem: {
    paddingVertical: 15,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  helpItemText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  logoutButton: {
    margin: 20,
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  version: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginBottom: 20,
  },
});
