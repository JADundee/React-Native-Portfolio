import { Link } from 'expo-router'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'


const app = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Josh Dundee</Text>
      <Text style={styles.body}>Software Developer with 2 years of experience and a current focus on the MERN stack (Mongo, Express, React, Node), Specializing in React. </Text>

      <Link href="/projects" style={{ marginHorizontal: 'auto'}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Projects</Text>
      </Pressable>
      </Link>
      <Link href="/skills" style={{ marginHorizontal: 'auto'}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Skills</Text>
      </Pressable>
      </Link>

      <Text style={styles.footer}>phone number: 
      <Link href="tel:+48535708584" asChild>
        <Text style={styles.link}>+48 535 708 584</Text>
      </Link>
      </Text>

      <Text style={styles.footer}>email: 
      <Link href="mailto:jadundee@icloud.com" asChild>
        <Text style={styles.link}>jadundee@icloud.com</Text>
      </Link>
      </Text>

      {/* <Text style={styles.footer}>github: 
      <Link href="https://github.com/JADundee" asChild>
        <Text style={styles.link}>github.com/JADundee</Text>
      </Link>
      </Text>

      <Text style={styles.footer}>cv/resume: 
      <Link href="https://www.dropbox.com/scl/fi/krfzmv18xj2fds30eowxk/CV3.pdf?rlkey=oufy7w0amf3syg3pzqmmefk2j&st=ppyjj2wo&dl=0" asChild>
        <Text style={styles.link}>Download CV/Resume</Text>
      </Link>
      </Text> */}

    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f172a', 
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: '#38bdf8', 
    fontSize: 42,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
    textShadowColor: '#062a3bff',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  body: {
    color: '#e0f2fe', 
    fontSize: 18,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 20,
    width: '75%',
    letterSpacing: 1,
    textShadowColor: '#0ea5e9',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  footer: {
    color: '#e0f2fe', 
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    marginBottom: 10,
    width: '100%',
    letterSpacing: 1,
    textShadowColor: '#0ea5e9',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  link: {
    color: '#38bdf8',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 6,
  },
  button: {
    height: 60,
    width: 200,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(56,189,248,0.15)',
    borderWidth: 1,
    borderColor: '#38bdf8',
    marginBottom: 30,
    shadowColor: '#38bdf8',
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  buttonText: {
    color: '#e0f2fe',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
})